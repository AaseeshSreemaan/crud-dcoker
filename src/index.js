 const express=require("express");
const cors=require("cors");
const dotenv = require("dotenv");
const pool=require("./config/db");
const userRoutes=require("./routes/userRoutes")
const errorHandling=require("./middlewares/errorHandler");
const createUserTable = require("./data/createUserTable");


dotenv.config();
const app=express();

const port=process.env.PORT || 5008


//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api",userRoutes);

//Error handling middleware

app.use(errorHandling);

// app.get("/", (req, res) => {
//     res.send("Server is working!");
// });

//Create Table before starting server
createUserTable();

//Testing POSTGRES Connection 
app.get("/",  async(req, res) => {
  console.log("START");
  const result = await pool.query("SELECT current_database()");
  console.log("end");
  res.send(`The database name is :${result.rows[0].current_database}`);
});

//Server running

app.listen(port,()=>{
    console.log(`Server is running  on http:localhost:${port}`);
})


const pool=require("../config/db");

const getAllUsersService = async () => {
    const result=await pool.query("SELECT * FROM users");
    return result.rows;
};


const getUserByIdService = async (id) => {
    const result=await pool.query("SELECT * FROM users where id=$1",[id]);
    return result.rows[0];
};

const createUserService = async (name,email) => {
    const result=await pool.query("INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *",[name,email]);
    return result.rows[0];
};

const updateUserService = async (id,name,email) => {
    const result=await pool.query("UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *",[name,email,id]);
    return result.rows[0];
};


const deleteUserService = async (id) => {
    const result=await pool.query("DELETE FROM users WHERE ID=$1 RETURNING *",[id]);
    return result.rows[0];
};

module.exports = {getAllUsersService,getUserByIdService,createUserService,updateUserService,deleteUserService };
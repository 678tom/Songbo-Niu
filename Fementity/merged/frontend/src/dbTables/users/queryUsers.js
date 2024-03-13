const { runQuery } = require('../../dbFuncs/databaseFunctions');

async function getPasswordOf(user){
    const query = "SELECT \"password\" FROM users WHERE user_id = $1";
    const value = [user.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["password"];
    }
    else {
        return null;
    }
}

async function getFirstNameOf(user){
    const query = "SELECT first_name FROM users WHERE user_id = $1";
    const value = [user.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["first_name"];
    }
    else {
        return null;
    }
}

async function getLastNameOf(user){
    const user_id = user.user_id;
    const query = "SELECT last_name FROM users WHERE user_id = $1";
    const value = [user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["last_name"];
    }
    else {
        return null;
    }
}

async function getAllUsersOfType(type){
    const query = "SELECT user_id FROM users u JOIN user_type ut ON (ut.user_type_name = $1 AND u.user_type_id = ut.user_type_id)";
    const value = [type];
    const results = await runQuery(query, value);
    if (results.rowCount > 0){
        return results.rows;
    }
    else{
        return null;
    }
}

async function getAllMemberUsers(){
    return await getAllUsersOfType("member");
}

async function getAllAdminUsers(){
    return await getAllUsersOfType("admin");
}

async function getAllBusinessUsers(){
    return await getAllUsersOfType("business");
}

async function getAllUsers(){
    const query = "SELECT * FROM users";
    const value = [];
    const results = await runQuery(query, value);
    if (results.rowCount > 0){
        return results.rows;
    }
    else {
        return null;
    }
}

module.exports = { getFirstNameOf, getLastNameOf, getPasswordOf, getAllUsers, getAllMemberUsers, getAllBusinessUsers, getAllAdminUsers };
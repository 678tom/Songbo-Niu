const {randomUUID} = require('crypto');
const {runInsert} = require('../../dbFuncs/databaseFunctions');

async function newUserType(type){
    const user_type_id = randomUUID();
    const insert = "INSERT INTO user_type(user_type_id, user_type_name) VALUES($1, $2)";
    const values = [user_type_id, type];
    await runInsert(insert, values);
}

module.exports = newUserType;
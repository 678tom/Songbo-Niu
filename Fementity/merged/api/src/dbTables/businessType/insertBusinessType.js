const {runInsert} = require("../../dbFuncs/databaseFunctions");
const { v4: generateUUID } = require('uuid');

async function newBusinessType(type_name){
    const type_id = generateUUID();
    const insert = "INSERT INTO business_types(business_type_id, business_type_name) VALUES($1, $2)";
    const values = [type_id, type_name];
    await runInsert(insert, values);
}
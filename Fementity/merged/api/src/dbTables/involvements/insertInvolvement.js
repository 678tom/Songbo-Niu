const { runInsert } = require("../../dbFuncs/databaseFunctions");
const { v4: generateUUID } = require('uuid');

async function newInvolvement(involvement_name){
    const id = generateUUID();
    const insert = "INSERT INTO involvements(involvement_id, involvement_name) VALUES($1, $2)";
    const values = [id, involvement_name];
    await runInsert(insert, values);
}



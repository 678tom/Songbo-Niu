const {Pool} = require("pg");

const credentials = {
    host: "34.95.17.80",
    user: "Dev",
    password: "FemDevJDKP9",
    database: "postgres",
    port: "5432"
}

function connect(){
    return new Pool(credentials);
}

async function runInsert(insert, values){
    const pool = connect();
    await pool.query(insert, values);
}

async function runUpdate(update, values){
    const pool = connect();
    await pool.query(update, values);
}

async function runQuery(query, values){
    const pool = connect();
    const results = await pool.query(query, values);
    if (await results === null){
        return null
    }
    return await results;
}

async function runDelete(deleteThis, values){
    const pool = connect();
    await pool.query(deleteThis, values);
}


module.exports = { runInsert, runUpdate, runQuery, runDelete}
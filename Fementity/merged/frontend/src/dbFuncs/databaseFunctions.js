const {connect} = require("./connect");

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
    if (await results.rowCount > 0){
        return await results;
    }
    else{
        return null;
    }
}

async function runDelete(deleteThis, values){
    const pool = connect();
    await pool.query(deleteThis, values);
}


module.exports = { runInsert, runUpdate, runQuery, runDelete}
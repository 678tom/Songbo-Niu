const {runQuery} = require('../../dbFuncs/databaseFunctions');

async function getUserTypeIDFor(userType){
    const query = "SELECT user_type_id FROM user_type WHERE user_type_name = $1";
    const value = [userType];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["user_type_id"];
    }
    else{
        return null;
    }
}

module.exports = { getUserTypeIDFor };
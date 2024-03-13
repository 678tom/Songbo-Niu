const { runQuery } = "../../dbFuncs/databaseFunctions";

async function getFindMethodFor(user){
    const query = "SELECT find_method FROM users_analytical_info WHERE user_id = $1";
    const value = [user.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["find_method"];
    }
    else{
        return null;
    }
}

async function getAdditionalCommentsFor(user){
    const query = "SELECT additional_comments FROM users_analytical_info WHERE user_id = $1";
    const value = [user.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["additional_comments"];
    }
    else{
        return null;
    }
}

module.exports = { getFindMethodFor, getAdditionalCommentsFor };
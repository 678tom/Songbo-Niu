const { runQuery } = require('../../dbFuncs/databaseFunctions');

async function getEmailOf(user){
    const query = "SELECT email FROM users_contact_information WHERE user_id = $1";
    const value = [user.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["email"];
    }
    else{
        return -1;
    }
}

async function getPhoneNumberOf(user){
    const query = "SELECT phone_number FROM users_contact_information WHERE user_id = $1";
    const value = [user.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["phone_number"];
    }
    else{
        return -1;
    }
}

module.exports = { getEmailOf, getPhoneNumberOf };
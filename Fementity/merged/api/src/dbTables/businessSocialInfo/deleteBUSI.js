const { runDelete } = require('../../dbFuncs/databaseFunctions');

async function removeSocialsFor(business){
    const deleteThis = "DELETE FROM business_users_social_info WHERE user_id = $1";
    const value = [business.user_id];
    await runDelete(deleteThis, value);
}

module.exports = { removeSocialsFor };
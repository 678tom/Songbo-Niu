const { runDelete } = require('../../dbFuncs/databaseFunctions');

async function removeUCInfoFor(user){
    const deleteThis = "DELETE FROM users_contact_info WHERE user_id = $1";
    const value = [user.user_id];
    await runDelete(deleteThis, value);
}

module.exports = { removeUCInfoFor };
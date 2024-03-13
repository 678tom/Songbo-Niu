const {runDelete} = require("../../dbFuncs/databaseFunctions");

async function removeUAIFor(user){
    const deleteThis = "DELETE FROM users_analytical_info WHERE user_id = $1";
    const value = [user.user_id];
    await runDelete(deleteThis, value)
}

module.exports = { removeUAIFor };
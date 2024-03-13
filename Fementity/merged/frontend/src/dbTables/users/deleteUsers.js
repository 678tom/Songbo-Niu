const {runDelete} = require('../../dbFuncs/databaseFunctions');

async function removeUser(user){
    const user_id = user.user_id;
    const deleteThis = "DELETE FROM users WHERE user_id = $1";
    const value = [user_id];
    await runDelete(deleteThis, value);
}

module.exports = { removeUser };
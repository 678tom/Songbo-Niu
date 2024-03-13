const {runInsert} = require('../../dbFuncs/databaseFunctions');
const {getUserTypeIDFor} = require("../userType/queryUserType");

async function newUserInfoFor(user){
    const userInfo = user.userInformation;
    const user_type_id = await getUserTypeIDFor(user.user_type_name);
    const insert = "INSERT INTO users(user_id, first_Name, last_Name, \"password\", user_type_id) VALUES($1, $2, $3, $4, $5)";
    const values = [user.user_id, userInfo.firstName, userInfo.lastName, userInfo.password, user_type_id];
    await runInsert(insert, values);
    // TODO: Error handling
    return true;
}

module.exports = newUserInfoFor;
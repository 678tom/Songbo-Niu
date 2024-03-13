const {runInsert} = require("../../dbFuncs/databaseFunctions");

async function newAnalyticalInfoFor(user){
    const userUAI = user.userAnalyticalInformation;
    const insert = "INSERT INTO users_analytical_info(user_id, find_method, additional_comments) VALUES($1, $2, $3)";
    const values = [user.user_id, userUAI.findMethod, userUAI.additionalComments];
    await runInsert(insert, values);
    // TODO: Add error handling
    return true;
}

module.exports = newAnalyticalInfoFor;
const {runUpdate} = require("../../dbFuncs/databaseFunctions");

async function updateFindMethodFor(user){
    const userUAI = user.userAnalyticalInformation;
    const update = "UPDATE users_analytical_info SET find_method = $2 WHERE user_id = $1";
    const values = [user.user_id, userUAI.findMethod];
    await runUpdate(update, values);
}

async function updateAdditionalCommentsFor(user){
    const userUAI = user.userAnalyticalInformation;
    const update = "UPDATE users_analytical_info SET additional_comments = $2 WHERE user_id = $1";
    const values = [user.user_id, userUAI.additionalComments];
    await runUpdate(update, values);
}

module.exports = {updateFindMethodFor, updateAdditionalCommentsFor};
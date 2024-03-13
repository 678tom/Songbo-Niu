const {runInsert} = require("../../dbFuncs/databaseFunctions");
const getInvolvementIDFromName = require("../involvements/queryInvolvements");

async function newUserInvolvementRow(business, involvement){
    const involvement_id = await getInvolvementIDFromName(involvement);
    const insert = "INSERT INTO business_users_involvements(user_id, involvement_id) VALUES($1, $2)";
    const values = [business.user_id, involvement_id];
    await runInsert(insert, values);
    // TODO: Error handling
    return true;

}

async function newUserInvolvementsFor(business){
    const involvements = business.businessUserInvolvements.involvements;
    for (const involvement of involvements) {
        await newUserInvolvementRow(business, involvement);
    }
    // TODO: Error handling
    return true;
}

module.exports = newUserInvolvementsFor;
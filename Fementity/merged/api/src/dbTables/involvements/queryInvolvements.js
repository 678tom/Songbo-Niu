const { runQuery } = require("../../dbFuncs/databaseFunctions");

async function getInvolvementIDFromName(involvement_name){
    const query = "SELECT involvement_id FROM involvements WHERE involvement_name = $1";
    const value = [involvement_name];
    const result = await runQuery(query, value);
    if (await result["rowCount"] === 0){
        return null;
    }
    return await result.rows[0]["involvement_id"];
}

module.exports = getInvolvementIDFromName;
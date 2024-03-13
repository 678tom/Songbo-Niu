const {runQuery} = require("../../dbFuncs/databaseFunctions");

async function getBusinessTypeIDFromName(business_type){
    const query = "SELECT business_type_id FROM business_types WHERE business_type_name = $1";
    const value = [business_type];
    const results = await runQuery(query, value);
    if (await results["rowCount"] === 0){
        return null;
    }
    return await results.rows[0]["business_type_id"];
}

module.exports = {getBusinessTypeIDFromName};
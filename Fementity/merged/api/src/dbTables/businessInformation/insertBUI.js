const { runInsert } = require('../../dbFuncs/databaseFunctions');
const { getBusinessTypeIDFromName } = require("../businessType/queryBusinessType");

async function newBusinessUserInfo(business){
    const business_type_id = await getBusinessTypeIDFromName(business.business_type_name);
    const userInfo = business.businessUserInformation;
    const insert = "INSERT INTO business_users_info(user_id, business_name, business_description, business_type_id) VALUES($1, $2, $3, $4)";
    const values = [business.user_id, userInfo.businessName, userInfo.businessDescription, business_type_id];
    await runInsert(insert, values);
    // TODO: Error handling
    return true;
}

module.exports = { newBusinessUserInfo };
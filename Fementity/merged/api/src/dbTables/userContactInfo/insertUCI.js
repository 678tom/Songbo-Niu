const { runInsert } = require('../../dbFuncs/databaseFunctions');

async function newContactInfoFor(user){
    const contactInfo = user.userContactInformation;
    const insert = "INSERT INTO users_contact_info(user_id, email, phone_number) VALUES($1, $2, $3)";
    const values = [user.user_id, contactInfo.email, contactInfo.phoneNumber];
    await runInsert(insert, values);
    // TODO: Add error handling
    return true;
}

module.exports = newContactInfoFor;
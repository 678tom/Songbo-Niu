const { runUpdate } = require('../../dbFuncs/databaseFunctions');

async function updateEmailOf(user){
    const newEmail = user.userContactInformation.email;
    const update = "UPDATE users_contact_information SET email = $2 WHERE user_id = $1";
    const values = [user.user_id, newEmail];
    await runUpdate(update, values);
}

async function updatePhoneNumberOf(user){
    const newPhoneNumber = user.userContactInformation.phoneNumber;
    const update = "UPDATE users_contact_information SET phone_number = $2 WHERE user_id = $1";
    const values = [user.user_id, newPhoneNumber];
    await runUpdate(update, values);
}

module.exports = {updateEmailOf, updatePhoneNumberOf};

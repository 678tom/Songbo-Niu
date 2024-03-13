const { runUpdate } = require('../../dbFuncs/databaseFunctions');

async function changeFirstNameOf(user){
    const user_id = user.user_id;
    const newFirstName = user.userInformation.firstName;

    const update = "UPDATE users SET first_name = $2 WHERE user_id = $1";
    const values = [user_id, newFirstName];
    await runUpdate(update, values);
}

async function changeLastNameOf(user){
    const user_id = user.user_id;
    const newLastName = user.userInformation.lastName;

    const update = "UPDATE users SET last_name = $2 WHERE user_id = $1";
    const values = [user_id, newLastName];
    await runUpdate(update, values);
}

async function changePasswordOf(user){
    const user_id = user.user_id;
    const newPassword = user.userInformation.password;

    const update = "UPDATE users SET \"password\" = $2 WHERE user_id = $1";
    const values = [user_id, newPassword];
    await runUpdate(update, values);
}

module.exports = { changeFirstNameOf, changeLastNameOf, changePasswordOf};
const User = require("./User");

class Admin extends User{
    constructor(user_id, userInformation, userContactInformation, userAnalyticalInformation, billingAddress, mailingAddress) {
        super(user_id, userInformation, userContactInformation, userAnalyticalInformation, billingAddress, mailingAddress);
        super._user_type_name = "admin";
    }
}

module.exports = Admin;
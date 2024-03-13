const { BusinessUser } = require("./BusinessUser");

class Consultant extends BusinessUser{

    constructor(user_id, userInformation, userContactInformation, userAnalyticalInformation,
                billingAddress, mailingAddress,
                businessUserInformation, businessUserSocialInfo, businessUserInvolvements) {
        super(user_id, userInformation, userContactInformation, userAnalyticalInformation,
            billingAddress, mailingAddress,
            businessUserInformation, businessUserSocialInfo, businessUserInvolvements);
    }

    get business_type_name(){
        return "consultant";
    }
}

module.exports = { Consultant };
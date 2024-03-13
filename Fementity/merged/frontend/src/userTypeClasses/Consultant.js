const { BusinessUser } = require("./BusinessUser");

class Consultant extends BusinessUser{
    constructor(user_id, userInformation, userContactInformation, userAnalyticalInformation,
                billingAddress, mailingAddress,
                businessUserInformation, businessUserSocialInfo,
                businessUserInvolvements) {
        super(user_id, userInformation, userContactInformation, userAnalyticalInformation,
            billingAddress, mailingAddress,
            businessUserInformation, businessUserSocialInfo,
            businessUserInvolvements);
        super._business_type_name = "consultant";
    }

}

module.exports = Consultant;
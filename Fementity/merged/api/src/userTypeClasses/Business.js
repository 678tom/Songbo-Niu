const { BusinessUser } = require('./BusinessUser');

class Business extends BusinessUser{
    constructor(user_id, userInformation, userContactInformation, userAnalyticalInformation,
                billingAddress, mailingAddress,
                businessUserInformation, businessUserSocialInfo,
                businessUserInvolvements) {
        super(user_id, userInformation, userContactInformation, userAnalyticalInformation,
            billingAddress, mailingAddress,
            businessUserInformation, businessUserSocialInfo,
            businessUserInvolvements);
    }

    get business_type_name(){
        return "business";
    }

}

module.exports = { Business };
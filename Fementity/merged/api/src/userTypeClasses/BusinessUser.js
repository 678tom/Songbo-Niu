const { User } = require("./User");

class BusinessUser extends User{
    constructor(user_id, userInformation, userContactInformation, userAnalyticalInformation,
                billingAddress, mailingAddress,
                businessUserInformation, businessUserSocialInfo,
                businessUserInvolvements) {
        super(user_id, userInformation, userContactInformation, userAnalyticalInformation,
            billingAddress, mailingAddress);
        super._user_type_name = "business";
        this._businessUserInformation = businessUserInformation;
        this._businessUserSocialInfo = businessUserSocialInfo;
        this._businessUserInvolvements = businessUserInformation;
        this._businessUserInvolvements = businessUserInvolvements;
    }

    get businessUserInformation() {
        return this._businessUserInformation;
    }

    set businessUserInformation(value) {
        this._businessUserInformation = value;
    }

    get businessUserSocialInfo() {
        return this._businessUserSocialInfo;
    }

    set businessUserSocialInfo(value) {
        this._businessUserSocialInfo = value;
    }

    get businessUserInvolvements() {
        return this._businessUserInvolvements;
    }

    set businessUserInvolvements(value) {
        this._businessUserInvolvements = value;
    }
}

module.exports = { BusinessUser };
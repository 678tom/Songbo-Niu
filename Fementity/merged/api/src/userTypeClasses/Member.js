const { User } = require("./User");

class Member extends User {
    constructor(user_id, userInformation, userContactInformation, userAnalyticalInformation,
                billingAddress, mailingAddress,
                memberPersonalInformation, membersAstrologicalInformation) {
        super(user_id, userInformation, userContactInformation, userAnalyticalInformation,
            billingAddress, mailingAddress);
        this._user_type_id = "member";
        this._memberPersonalInformation = memberPersonalInformation;
        this._membersAstrologicalInformation = membersAstrologicalInformation;
    }

    get memberPersonalInformation() {
        return this._memberPersonalInformation;
    }

    set memberPersonalInformation(value) {
        this._memberPersonalInformation = value;
    }

    get membersAstrologicalInformation() {
        return this._membersAstrologicalInformation;
    }

    set membersAstrologicalInformation(value) {
        this._membersAstrologicalInformation = value;
    }
}

module.exports = { Member };
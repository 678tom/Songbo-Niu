class User{
    constructor(user_id, userInformation, userContactInformation, userAnalyticalInformation,
                billingAddress, mailingAddress) {
        this._user_id = user_id;
        this._user_type_name = null;
        this._userInformation = userInformation;
        this._userContactInformation = userContactInformation;
        this._userAnalyticalInfo = userAnalyticalInformation;
        this._billingAddress = billingAddress;
        this._mailingAddress = mailingAddress;
    }

    get user_id() {
        return this._user_id;
    }

    set user_id(user_id) {
        this._user_id = user_id;
    }

    get user_type_name(){
        return this._user_type_name;
    }

    get userInformation() {
        return this._userInformation;
    }

    set userInformation(userInformation) {
        this._userInformation = userInformation;
    }

    get userContactInformation() {
        return this._userContactInformation;
    }

    set userContactInformation(userContactInformation) {
        this._userContactInformation = userContactInformation;
    }

    get userAnalyticalInformation() {
        return this._userAnalyticalInfo;
    }

    set userAnalyticalInformation(userAnalyticalInformation) {
        this._userAnalyticalInfo = userAnalyticalInformation;
    }

    get billingAddress() {
        return this._billingAddress;
    }

    set billingAddress(billingAddress) {
        this._billingAddress = billingAddress;
    }

    get mailingAddress() {
        return this._mailingAddress;
    }

    set mailingAddress(mailingAddress) {
        this._mailingAddress = mailingAddress;
    }
}

module.exports = User;

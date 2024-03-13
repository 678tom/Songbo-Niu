class BusinessUserInformation {
    constructor(businessName, businessDescription) {
        this._businessName = businessName;
        this._businessDescription = businessDescription;
    }

    get businessName() {
        return this._businessName;
    }

    set businessName(value) {
        this._businessName = value;
    }

    get businessDescription() {
        return this._businessDescription;
    }

    set businessDescription(value) {
        this._businessDescription = value;
    }
}

module.exports = { BusinessUserInformation };
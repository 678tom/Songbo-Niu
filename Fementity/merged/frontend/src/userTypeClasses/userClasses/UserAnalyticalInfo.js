class UserAnalyticalInfo{
    constructor(findMethod, additionalComments) {
        this._findMethod = findMethod;
        this._additionalComments = additionalComments;
    }

    get findMethod() {
        return this._findMethod;
    }

    set findMethod(value) {
        this._findMethod = value;
    }

    get additionalComments() {
        return this._additionalComments;
    }

    set additionalComments(value) {
        this._additionalComments = value;
    }
}

module.exports = UserAnalyticalInfo;
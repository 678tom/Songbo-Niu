class UserContactInfo{
    constructor(email, phoneNumber) {
        this._email = email;
        this._phoneNumber = phoneNumber;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
    }
}

module.exports = UserContactInfo;
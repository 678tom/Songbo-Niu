const { createHash } = require('crypto');
const HASH_LENGTH = 64;


function hashThis(string){
    return createHash("sha256").update(string).digest("hex");
}

function isPlainText(password){
    if (password === undefined){
        return false;
    }
    return password.length < HASH_LENGTH;
}

class UserInformation {
    constructor(firstName, lastName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        if (isPlainText(value)){
            this._password = hashThis(value);
        }
        else{
            this._password = value;
        }
    }
}

module.exports = { UserInformation };
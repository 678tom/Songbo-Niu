const { createHash } = require('crypto');
const HASH_LENGTH = 64;


function hashThis(string){
    return createHash("sha256").update(string).digest("hex");
}

function isPlainText(password){
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
        this._firstName = value.toString();
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value.toString();
    }

    get password() {
        return this._password;
    }

    set password(value) {
        if (isPlainText(value.toString())){
            this._password = hashThis(value.toString());
        }
        else{
            this._password = value.toString();
        }
    }
}

module.exports = UserInformation;
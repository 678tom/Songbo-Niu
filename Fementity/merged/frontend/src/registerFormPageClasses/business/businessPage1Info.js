class BusinessPage1Info{
    constructor(firstName, lastName, business_type_name, businessName, province, email, phone, password) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._business_type_name = business_type_name;
        this._businessName = businessName;
        this._province = province;
        this._email = email;
        this._phone = phone;
        this._password = password;
    }


    get  getFirstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get getLastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get  getBusiness_type_name() {
        return this._business_type_name;
    }

    set business_type_name(value) {
        this._business_type_name = value;
    }

    get  getBusinessName() {
        return this._businessName;
    }

    set businessName(value) {
        this._businessName = value;
    }

    get  getProvince() {
        return this._province;
    }

    set province(value) {
        this._province = value;
    }

    get  getEmail() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get  getPhone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get getPassword() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}

module.exports = { BusinessPage1Info };
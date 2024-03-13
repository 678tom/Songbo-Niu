class Address{
    constructor(address_id, aptNum, houseNumName, streetName, city, province, postCode) {
        this._address_id = address_id;
        this._address_type_name = null;
        this._aptNum = aptNum;
        this._houseNumName = houseNumName;
        this._streetName = streetName;
        this._city = city;
        this._province = province;
        this._postCode = postCode;
    }

    get address_id() {
        return this._address_id;
    }

    set address_id(value) {
        this._address_id = value;
    }

    get address_type_name(){
        return this._address_type_name;
    }

    set address_type_name(value){
        this._address_type_name = value;
    }

    get aptNum() {
        return this._aptNum;
    }

    set aptNum(value) {
        this._aptNum = value;
    }

    get houseNumName() {
        return this._houseNumName;
    }

    set houseNumName(value) {
        this._houseNumName = value;
    }

    get streetName() {
        return this._streetName;
    }

    set streetName(value) {
        this._streetName = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get province() {
        return this._province;
    }

    set province(value) {
        this._province = value;
    }

    get postCode() {
        return this._postCode;
    }

    set postCode(value) {
        this._postCode = value;
    }
}

module.exports = { Address };
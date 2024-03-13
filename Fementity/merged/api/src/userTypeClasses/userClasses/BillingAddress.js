const { Address } = require("./Address");

class BillingAddress extends Address{

    constructor(address_id, aptNum, houseNumName, streetName, city, province, postCode) {
        super(address_id, aptNum, houseNumName, streetName, city, province, postCode);
        super.address_type_name = "billing";
    }
}

module.exports = { BillingAddress };
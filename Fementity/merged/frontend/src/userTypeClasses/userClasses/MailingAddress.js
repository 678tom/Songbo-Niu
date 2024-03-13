const Address = require("./Address");

class MailingAddress extends Address{

    constructor(address_id, aptNum, houseNumName, streetName, city, province, postCode) {
        super(address_id, aptNum, houseNumName, streetName, city, province, postCode);
        super._address_type_name = "mailing";
    }
}

module.exports = MailingAddress;
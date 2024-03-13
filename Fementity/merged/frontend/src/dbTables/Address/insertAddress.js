const { runInsert } = require('../../dbFuncs/databaseFunctions');

async function newAddress(address) {
    const insert = "INSERT INTO addresses(address_id, apt_number, house_number_name, street_name, city, province, post_code) VALUES($1, $2, $3, $4, $5, $6, $7)";
    const values = [address.address_id, address.aptNum, address.houseNumName, address.streetName, address.city, address.province, address.postCode];
    await runInsert(insert, values);
}

module.exports = newAddress;
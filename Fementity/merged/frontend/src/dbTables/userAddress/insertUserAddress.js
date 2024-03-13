const {getAddressTypeIDFromTypeName} = require("../addressType/queryAddressType");
const {runInsert} = require("../../dbFuncs/databaseFunctions");
const {addressIsNotSaved} = require("../Address/queryAddress");
const newAddress = require("../Address/insertAddress");

async function makeSureAddressIsSaved(user){
    const createNewAddress = await addressIsNotSaved(user.mailingAddress);
    if (createNewAddress){
        await newAddress(user.mailingAddress);
    }
}

async function newAddressFor(user, address_type_id){
    const insert = "INSERT INTO user_address(user_id, address_id, address_type_id) VALUES($1, $2, $3)";
    const values = [user.user_id, user.mailingAddress.address_id, address_type_id];
    await runInsert(insert, values);
}

async function newMailingAddressFor(user){
    await makeSureAddressIsSaved(user);
    const address_type_id = await getAddressTypeIDFromTypeName('mailing');
    await newAddressFor(user, address_type_id);
}

async function newBillingAddressFor(user){
    await makeSureAddressIsSaved(user);
    const address_type_id = await getAddressTypeIDFromTypeName('billing');
    await newAddressFor(user, address_type_id);}

module.exports = {newMailingAddressFor, newBillingAddressFor};
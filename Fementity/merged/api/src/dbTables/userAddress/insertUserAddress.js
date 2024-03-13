const {getAddressTypeIDFromTypeName} = require("../addressType/queryAddressType");
const {runInsert} = require("../../dbFuncs/databaseFunctions");
const {addressIsNotSaved} = require("../Address/queryAddress");
const newAddress = require("../Address/insertAddress");

async function makeSureAddressIsSaved(address){
    const createNewAddress = await addressIsNotSaved(address);
    if (createNewAddress){
        await newAddress(address);
    }
    // TODO: Add error handling
    return true;
}

async function saveNewAddressFor(user, address_id, address_type_id){
    const insert = "INSERT INTO user_address(user_id, address_id, address_type_id) VALUES($1, $2, $3)";
    const values = [user.user_id, address_id, address_type_id];
    await runInsert(insert, values);
    // TODO: Add error handling
    return true;
}

async function newMailingAddressFor(user){
    await makeSureAddressIsSaved(user.mailingAddress);
    const address_type_id = await getAddressTypeIDFromTypeName('mailing');
    await saveNewAddressFor(user, user.mailingAddress.address_id, address_type_id);
    // TODO: Add error handling
    return true;
}

async function newBillingAddressFor(user){
    await makeSureAddressIsSaved(user.billingAddress);
    const address_type_id = await getAddressTypeIDFromTypeName('billing');
    await saveNewAddressFor(user, user.billingAddress.address_id, address_type_id);
    // TODO: Add error handling
    return true;
}


module.exports = {newMailingAddressFor, newBillingAddressFor};
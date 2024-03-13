const { runUpdate } = require('../../dbFuncs/databaseFunctions');

async function updateAptNumFor(address){
    const update = "UPDATE addresses SET apt_num = $2 WHERE address_id = $1";
    const values = [address.address_id, address.aptNum];
    await runUpdate(update, values);
}

async function updateHouseNumberNameFor(address){
    const update = "UPDATE addresses SET house_number_name = $2 WHERE address_id = $1";
    const values = [address.address_id, address.houseNumName];
    await runUpdate(update, values);
}

async function updateStreetNameFor(address){
    const update = "UPDATE addresses SET street_name = $2 WHERE address_id = $1";
    const values = [address.address_id, address.streetName];
    await runUpdate(update, values);
}

async function updateCityFor(address){
    const update = "UPDATE addresses SET city = $2 WHERE address_id = $1";
    const values = [address.address_id, address.city];
    await runUpdate(update, values);
}

async function updateProvinceFor(address){
    const update = "UPDATE addresses SET province = $2 WHERE address_id = $1";
    const values = [address.address_id, address.province];
    await runUpdate(update, values);
}

async function updatePostCodeFor(address){
    const update = "UPDATE addresses SET post_code = $2 WHERE address_id = $1";
    const values = [address.address_id, address.postCode];
    await runUpdate(update, values);
}

module.exports = {updateAptNumFor, updateHouseNumberNameFor, updateStreetNameFor, updateCityFor, updateProvinceFor, updatePostCodeFor};
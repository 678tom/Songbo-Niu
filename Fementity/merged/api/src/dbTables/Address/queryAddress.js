const { runQuery } = require('../../dbFuncs/databaseFunctions');

async function getAptNumFor(address){
    const query = "SELECT apt_num FROM addresses WHERE address_id = $1";
    const value = [address.address_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["apt_num"];
    }
    else{
        return null;
    }
}

async function getHouseNumberNameFor(address){
    const query = "SELECT house_number_name FROM addresses WHERE address_id = $1";
    const value = [address.address_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["house_number_name"];
    }
    else{
        return null;
    }
}

async function getStreetNameFor(address){
    const query = "SELECT street_name FROM addresses WHERE address_id = $1";
    const value = [address.address_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["street_name"];
    }
    else{
        return null;
    }
}

async function getCityFor(address){
    const query = "SELECT city FROM addresses WHERE address_id = $1";
    const value = [address.address_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["city"];
    }
    else{
        return null;
    }
}

async function getProvinceFor(address){
    const query = "SELECT province FROM addresses WHERE address_id = $1";
    const value = [address.address_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["province"];
    }
    else{
        return null;
    }
}

async function getPostCodeFor(address){
    const query = "SELECT post_code FROM addresses WHERE address_id = $1";
    const value = [address.address_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["post_code"];
    }
    else{
        return null;
    }
}

async function addressIsNotSaved(address){
    const query = "SELECT * FROM addresses WHERE apt_number = $1 AND house_number_name = $2 AND street_name = $3 AND city = $4 AND province = $5 AND post_code = $6";
    const value = [address.aptNum, address.houseNumName, address.streetName, address.city, address.province, address.postcode];
    const result = await runQuery(query, value);
    return await result.rowCount === 0;
}

module.exports = { getAptNumFor, getHouseNumberNameFor, getStreetNameFor, getCityFor, getProvinceFor, getPostCodeFor, addressIsNotSaved };
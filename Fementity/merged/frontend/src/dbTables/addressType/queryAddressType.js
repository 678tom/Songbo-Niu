const {runQuery} = require("../../dbFuncs/databaseFunctions");

async function getAddressTypeIDFromTypeName(typeName){
    const query = "SELECT address_type_id FROM address_type WHERE address_type_name = $1";
    const value = [typeName];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["address_type_id"];
    }
    else{
        return null;
    }
}

module.exports = { getAddressTypeIDFromTypeName };
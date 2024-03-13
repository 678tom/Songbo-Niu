const { runDelete } = require('../../dbFuncs/databaseFunctions');

async function removeAddress(address){
    const deleteThis = "DELETE FROM addresses WHERE address_id = $1";
    const value = [address.address_id];
    await runDelete(deleteThis, value);
}

module.exports = { removeAddress };
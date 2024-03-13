const { runDelete } = require('../../dbFuncs/databaseFunctions');

async function removeProducts(product){
    const deleteThis = "DELETE FROM products WHERE product_id = $1";
    const value = [product.product_id];
    await runDelete(deleteThis, value);
}

module.exports = { removeProducts };
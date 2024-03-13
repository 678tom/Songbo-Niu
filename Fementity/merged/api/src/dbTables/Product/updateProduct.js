const { runUpdate } = require('../../dbFuncs/databaseFunctions');

async function updateProductNameFor(product){
    const update = "UPDATE products SET product_name = $2 WHERE product_id = $1";
    const values = [product.product_id, product.product_name];
    await runUpdate(update, values);
}

async function updateProductDescriptioneFor(product){
    const update = "UPDATE products SET product_description = $2 WHERE address_id = $1";
    const values = [product.product_id, product.product_description];
    await runUpdate(update, values);
}

async function updateProductPriceFor(product){
    const update = "UPDATE products SET product_price = $2 WHERE address_id = $1";
    const values = [product.product_id, product.product_price];
    await runUpdate(update, values);
}

module.exports = {updateProductNameFor, updateProductDescriptioneFor, updateProductPriceFor};
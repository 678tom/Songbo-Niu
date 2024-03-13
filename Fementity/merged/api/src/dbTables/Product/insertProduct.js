const { runInsert } = require('../../dbFuncs/databaseFunctions');

async function insertProduct(product) {
    const insert = "INSERT INTO addresses(product_id, product_name, product_description, product_price) VALUES($1, $2, $3, $4)";
    const values = [product.product_id, product.product_name, product.product_description, product.product_price];
    await runInsert(insert, values);
}

module.exports = insertProduct;
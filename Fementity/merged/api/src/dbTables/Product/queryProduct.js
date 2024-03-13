const { runQuery } = require('../../dbFuncs/databaseFunctions');

async function getProductNameFor(product){
    const query = "SELECT product_name FROM products WHERE product_id = $1";
    const value = [product.product_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["product_name"];
    }
    else{
        return null;
    }
}

async function getProductDescriptionFor(product){
    const query = "SELECT product_description FROM products WHERE product_id = $1";
    const value = [product.product_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["product_description"];
    }
    else{
        return null;
    }
}

async function getProductPriceFor(product){
    const query = "SELECT product_price FROM products WHERE product_id = $1";
    const value = [product.product_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["product_price"];
    }
    else{
        return null;
    }
}

module.exports = { getProductNameFor, getProductDescriptionFor, getProductPriceFor };
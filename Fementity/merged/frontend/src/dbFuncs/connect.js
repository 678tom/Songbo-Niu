const { Pool } = require("pg");
const {credentials} = require("./credentials");

function connect(){
    return new Pool(credentials);
}

module.exports = { connect };
const newUserInfoFor = require("../dbTables/users/insertUsers");
const newContactInfoFor = require("../dbTables/userContactInfo/insertUCI");
const {newBillingAddressFor, newMailingAddressFor} = require("../dbTables/userAddress/insertUserAddress");
const newAnalyticalInfoFor = require("../dbTables/userAnalyticalInfo/insertUAI");

async function registerNewUser(user){
    let worked = await newUserInfoFor(user);
    if (!worked){
        return false;
    }
    worked = await newContactInfoFor(user);
    if (!worked){
        return false;
    }
    worked = await newAnalyticalInfoFor(user);
    if (!worked){
        return false;
    }
    worked = await newBillingAddressFor(user);
    if (!worked){
        return false;
    }
    worked = await newMailingAddressFor(user);
    if (!worked){
        return false;
    }
    return worked;
}

module.exports = { registerNewUser };
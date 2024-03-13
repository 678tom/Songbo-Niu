const {registerNewUser} = require("./registerNewUser");
const {newBusinessSocialInfo} = require("../dbTables/businessSocialInfo/insertBUSI");
const {newBusinessUserInfo} = require("../dbTables/businessInformation/insertBUI");
const newUserInvolvementsFor = require("../dbTables/userInvolvement/insertUserInvolvement");
const {createNewConsultantFromForm} = require("../newBlankUsers/createNewConsultant");
const {createNewBusinessFromForm} = require("../newBlankUsers/createNewBusiness");

async function registerNewBusiness(formData){
    let business = null;
    if (formData.businessType === 'Consultant'){
        business = createNewConsultantFromForm(formData);
    }
    else if (formData.businessType === 'Business'){
        business = createNewBusinessFromForm(formData)
    }
    let worked = await registerNewUser(business);
    if (!worked){
        return false;
    }
    worked = await newBusinessUserInfo(business);
    if (!worked){
        return false;
    }
    worked = await newBusinessSocialInfo(business);
    if (!worked){
        return false;
    }
    worked = await newUserInvolvementsFor(business);
    if (!worked){
        return false;
    }
    return worked;
}

module.exports = {registerNewBusiness};
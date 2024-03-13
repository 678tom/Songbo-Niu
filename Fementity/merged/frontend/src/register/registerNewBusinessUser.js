const Consultant = require("../userTypeClasses/Consultant");
const {randomUUID} = require('crypto');
const Business = require("../userTypeClasses/Business");
const UserInformation = require("../userTypeClasses/userClasses/UserInformation");
const UserContactInfo = require("../userTypeClasses/userClasses/UserContactInfo");
const {BusinessUserInformation} = require("../userTypeClasses/businessClasses/BusinessUserInformation");
const MailingAddress = require("../userTypeClasses/userClasses/MailingAddress");

function businessPage1(userInputted){
    let newUser;

    const userInfo = new UserInformation(userInputted.getFirstName, userInputted.getLastName);
    userInfo.password = userInputted.getPassword;

    const userContactInfo = new UserContactInfo(userInputted.getEmail, userInputted.getPhone);

    const userMailingAddress = new MailingAddress();
    userMailingAddress.province = userInputted.getProvince;

    const businessInfo = new BusinessUserInformation()
    businessInfo.businessName = userInputted.getBusinessName;

    if (userInputted.getBusiness_type_name === "consultant"){
        newUser = new Consultant();
    }
    else {
        newUser = new Business();
    }
    newUser.user_id = randomUUID();
    newUser.userInformation = userInfo;
    newUser.userContactInformation = userContactInfo;
    newUser.mailingAddress = userMailingAddress;
    newUser.businessUserInformation = businessInfo;

    return newUser;
}

function businessPage2(newUser, userInputted){
    newUser.businessUserInformation.businessDescription = userInputted.getDescription;
    newUser.businessUserSocialInfo = userInputted.socials;
    return newUser;
}

function businessPage3(newUser, userInputted){
    newUser.businessUserInvolvements = userInputted.involvements;
    newUser.userAnalyticalInformation = userInputted.analytics;
    return newUser;
}

module.exports = { businessPage1, businessPage2, businessPage3 };

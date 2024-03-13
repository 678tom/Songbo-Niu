const { v4: generateUUID } = require('uuid');

const { Business } = require("../userTypeClasses/Business");
const { UserInformation } = require("../userTypeClasses/userClasses/UserInformation");
const { UserContactInfo } = require("../userTypeClasses/userClasses/UserContactInfo");
const { UserAnalyticalInfo } = require("../userTypeClasses/userClasses/UserAnalyticalInfo");
const {BillingAddress} = require("../userTypeClasses/userClasses/BillingAddress");
const { MailingAddress } = require("../userTypeClasses/userClasses/MailingAddress");
const {BusinessUserInformation} = require("../userTypeClasses/businessClasses/BusinessUserInformation");
const {BusinessUserSocialInformation} = require("../userTypeClasses/businessClasses/BusinessUserSocialInformation");
const {BusinessUserInvolvements} = require("../userTypeClasses/businessClasses/BusinessUserInvolvements");

function createNewBusinessFromForm(form){
    const user_id = generateUUID();
    const billing_address_id = generateUUID();
    const mailing_address_id = generateUUID();
     return new Business(
         user_id,
         new UserInformation(form.firstName, form.lastName, form.password),
         new UserContactInfo(form.emailAddress, form.phoneNumber),
         new UserAnalyticalInfo(form.findMethod, form.additionalComment),
         new BillingAddress(billing_address_id, form.billUnit, form.billHouseNumberName, form.billStreetName,
             form.billCity, form.billProvince, form.billPostcode),
         new MailingAddress(mailing_address_id, form.unit, form.houseNumberName, form.streetName,
             form.city, form.province, form.postcode),
         new BusinessUserInformation(form.registeredName, form.description),
         new BusinessUserSocialInformation(form.website, form.twitter, form.instagram, form.facebook, form.spotify,
             form.youtube, form.linkedin),
         new BusinessUserInvolvements(form.course, form.podcastYoutube,
             form.workshop, form.event, form.coupon,
             form.blog)
    )
}


module.exports = {createNewBusinessFromForm};

const { runInsert } = require('../../dbFuncs/databaseFunctions');

async function newBusinessSocialInfo(business){
    const socialInfo = business.businessUserSocialInfo;
    const insert = "INSERT INTO business_users_social_info(user_id, website, twitter, instagram, facebook, spotify, youtube, linkedin) VALUES($1, $2, $3, $4, $5, $6, $7, $8)";
    const values = [business.user_id, socialInfo.website, socialInfo.twitter, socialInfo.instagram,
        socialInfo.facebook, socialInfo.spotify, socialInfo.youtube, socialInfo.linkedIn];
    await runInsert(insert, values);
    // TODO: Error handling
    return true;
}

module.exports = { newBusinessSocialInfo };
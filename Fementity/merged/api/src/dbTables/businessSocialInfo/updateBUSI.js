const { runUpdate } = require('../../dbFuncs/databaseFunctions');

async function updateWebsiteFor(business){
    const newWebsite = business.businessUserSocialInfo.website;
    const update = "UPDATE business_users_social_info SET website = $2 WHERE user_id = $1";
    const values = [business.user_id, newWebsite];
    await runUpdate(update, values);
}

async function updateTwitterFor(business){
    const newTwitter = business.businessUserSocialInfo.twitter;
    const update = "UPDATE business_users_social_info SET twitter = $2 WHERE user_id = $1";
    const values = [business.user_id, newTwitter];
    await runUpdate(update, values);
}

async function updateInstagramFor(business){
    const newInstagram = business.businessUserSocialInfo.twitter;
    const update = "UPDATE business_users_social_info SET instagram = $2 WHERE user_id = $1";
    const values = [business.user_id, newInstagram];
    await runUpdate(update, values);
}

async function updateFacebookFor(business){
    const newFacebook = business.businessUserSocialInfo.facebook;
    const update = "UPDATE business_users_social_info SET facebook = $2 WHERE user_id = $1";
    const values = [business.user_id, newFacebook];
    await runUpdate(update, values);
}

async function updateSpotifyFor(business){
    const newSpotify = business.businessUserSocialInfo.spotify;
    const update = "UPDATE business_users_social_info SET spotify = $2 WHERE user_id = $1";
    const values = [business.user_id, newSpotify];
    await runUpdate(update, values);
}

async function updateYoutubeFor(business){
    const newYoutube = business.businessUserSocialInfo.youtube;
    const update = "UPDATE business_users_social_info SET youtube = $2 WHERE user_id = $1";
    const values = [business.user_id, newYoutube];
    await runUpdate(update, values);
}

async function updateLinkedInFor(business){
    const newLinkedIn = business.businessUserSocialInfo.linkedIn;
    const update = "UPDATE business_users_social_info SET linkedin = $2 WHERE user_id = $1";
    const values = [business.user_id, newLinkedIn];
    await runUpdate(update, values);
}

module.exports = { updateWebsiteFor, updateTwitterFor, updateInstagramFor, updateFacebookFor, updateSpotifyFor, updateYoutubeFor, updateLinkedInFor };
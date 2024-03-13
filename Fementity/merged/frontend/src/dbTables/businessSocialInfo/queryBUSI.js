const { runQuery } = require('../../dbFuncs/databaseFunctions');

async function getWebsiteFor(business){
    const query = "SELECT website FROM business_users_social_info WHERE user_id = $1";
    const value = [business.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["website"];
    }
    else {
        return null;
    }
}

async function getTwitterFor(business){
    const query = "SELECT twitter FROM business_users_social_info WHERE user_id = $1";
    const value = [business.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["twitter"];
    }
    else {
        return null;
    }
}

async function getInstagramFor(business){
    const query = "SELECT instagram FROM business_users_social_info WHERE user_id = $1";
    const value = [business.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["instagram"];
    }
    else {
        return null;
    }
}

async function getFacebookFor(business){
    const query = "SELECT facebook FROM business_users_social_info WHERE user_id = $1";
    const value = [business.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["facebook"];
    }
    else {
        return null;
    }
}

async function getSpotifyFor(business){
    const query = "SELECT spotify FROM business_users_social_info WHERE user_id = $1";
    const value = [business.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["spotify"];
    }
    else {
        return null;
    }
}

async function getYoutubeFor(business){
    const query = "SELECT youtube FROM business_users_social_info WHERE user_id = $1";
    const value = [business.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["youtube"];
    }
    else {
        return null;
    }
}

async function getLinkedInFor(business){
    const query = "SELECT linkedin FROM business_users_social_info WHERE user_id = $1";
    const value = [business.user_id];
    const result = await runQuery(query, value);
    if (result.rowCount > 0){
        return result.rows[0]["linkedin"];
    }
    else {
        return null;
    }
}

module.exports = { getWebsiteFor, getTwitterFor, getInstagramFor, getFacebookFor, getSpotifyFor, getYoutubeFor, getLinkedInFor };
class BusinessUserSocialInformation{
    constructor(website, twitter, instagram, facebook, spotify, youtube, linkedIn) {
        this._website = website;
        this._twitter = twitter;
        this._instagram = instagram;
        this._facebook = facebook;
        this._spotify = spotify;
        this._youtube = youtube;
        this._linkedIn = linkedIn;
    }

    get website() {
        return this._website;
    }

    set website(value) {
        this._website = value;
    }

    get twitter() {
        return this._twitter;
    }

    set twitter(value) {
        this._twitter = value;
    }

    get instagram() {
        return this._instagram;
    }

    set instagram(value) {
        this._instagram = value;
    }

    get facebook() {
        return this._facebook;
    }

    set facebook(value) {
        this._facebook = value;
    }

    get spotify() {
        return this._spotify;
    }

    set spotify(value) {
        this._spotify = value;
    }

    get youtube() {
        return this._youtube;
    }

    set youtube(value) {
        this._youtube = value;
    }

    get linkedIn() {
        return this._linkedIn;
    }

    set linkedIn(value) {
        this._linkedIn = value;
    }
}

module.exports = { BusinessUserSocialInformation };
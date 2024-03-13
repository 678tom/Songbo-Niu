class BusinessPage2Info{
    constructor(description, socials) {
        this._description = description;
        this._socials = socials;
    }

    get getDescription() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get socials() {
        return this._socials;
    }

    set socials(value) {
        this._socials = value;
    }
}

module.exports = {BusinessPage2Info};
class MemberPersonalInformation{
    constructor(title, pronouns, occupation){
        this._title = title;
        this._pronouns = pronouns;
        this._occupation = occupation;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get pronouns() {
        return this._pronouns;
    }

    set pronouns(value) {
        this._pronouns = value;
    }

    get occupation() {
        return this._occupation;
    }

    set occupation(value) {
        this._occupation = value;
    }
}

module.exports = { MemberPersonalInformation }
class MembersAstrologicalInformation{
    constructor(sunSign, moonSign, risingSign) {
        this._sunSign = sunSign;
        this._moonSign = moonSign;
        this._risingSign = risingSign;
    }

    get sunSign() {
        return this._sunSign;
    }

    set sunSign(value) {
        this._sunSign = value;
    }

    get moonSign() {
        return this._moonSign;
    }

    set moonSign(value) {
        this._moonSign = value;
    }

    get risingSign() {
        return this._risingSign;
    }

    set risingSign(value) {
        this._risingSign = value;
    }
}

module.exports = MembersAstrologicalInformation;
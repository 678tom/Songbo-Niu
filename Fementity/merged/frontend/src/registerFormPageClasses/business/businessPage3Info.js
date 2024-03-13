class BusinessPage3Info{
    constructor(involvements, analytics) {

        this._involvements = involvements;
        this._analytics = analytics;
    }

    get involvements() {
        return this._involvements;
    }

    set involvements(value) {
        this._involvements = value;
    }

    get analytics() {
        return this._analytics;
    }

    set analytics(value) {
        this._analytics = value;
    }
}

module.exports = {BusinessPage3Info};
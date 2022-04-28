class Field {
    constructor(n, m) {
        this._n = n;
        this._m = m;
    }

    get n() {
        return this._n;
    }

    set n(value) {
        this._n = value;
    }

    get m() {
        return this._m;
    }

    set m(value) {
        this._m = value;
    }
}

class Board {
    constructor(fields) {
        this._fields = fields;
    }

    get fields() {
        return this._fields;
    }

    set fields(value) {
        this._fields = value;
    }

    printBoard() {

    }
}

module.exports = {
    Board,
    Field
}

class Mine {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }
}

class Field {
    constructor(n, m, mines = []) {
        this._n = n;
        this._m = m;
        this._mines = mines
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

    get mines() {
        return this._mines;
    }

    set mines(value) {
        this._mines = value;
    }

    calculateNumberOfAdjacentMines(x, y) {

    }

    printField() {
        return ''
    }
}

class Board {
    constructor(fields = []) {
        this._fields = fields;
    }

    get fields() {
        return this._fields;
    }

    set fields(value) {
        this._fields = value;
    }

    printBoard() {
        let board = ''
        for(let i = 0; i < this._fields.length; i++) {
            if(this._fields[i].printField()) {
                board += 'Field #' + (i + 1) + '\n'
                board += this._fields[i].printField()
            }
        }
        return board;
    }
}

module.exports = {
    Board,
    Field,
    Mine
}

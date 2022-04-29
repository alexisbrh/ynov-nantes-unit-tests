class Mine {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    };

    get x() {
        return this._x;
    };

    set x(value) {
        this._x = value;
    };

    get y() {
        return this._y;
    };

    set y(value) {
        this._y = value;
    };
};

class Field {
    constructor(n, m, mines = []) {
        if(n <= 0) {
            throw new Error('n should not be negative');
        };
        if (m <= 0) {
            throw new Error('m should not be negative');
        };

        this._n = n;
        this._m = m;
        this._mines = mines;
    };

    get n() {
        return this._n;
    };

    set n(value) {
        this._n = value;
    };

    get m() {
        return this._m;
    };

    set m(value) {
        this._m = value;
    };

    get mines() {
        return this._mines;
    };

    set mines(value) {
        this._mines = value;
    };

    calculateNumberOfAdjacentMines(x, y) {
        for(let i = 0; i < this._mines.length; i++) {
            if (this._mines[i].x === x && this._mines[i].y === y) {
                return '*';
            };
        };

        let numberMines = 0;
        for(let i = x - 1; i <= x + 1; i++) {
            for(let j = y - 1; j <= y + 1;  j++) {
                if(this._mines.some((mine) => mine.x === i && mine.y === j)) {
                    numberMines += 1;
                };
            };
        };
        return numberMines.toString();
    };

    printField() {
        let field = '';
        for(let i = 1; i <= this._n; i++) {
            for(let j = 1; j <= this._m; j++) {
                field += this.calculateNumberOfAdjacentMines(i, j);
            }

            if(i < this._n) {
                field += '\n';
            }
        }
        return field;
    }
}

class Board {
    constructor(fields = []) {
        this._fields = fields.filter((field) => field._n > 0 && field._m > 0 && field._m <= 100);
    }

    get fields() {
        return this._fields;
    }

    set fields(value) {
        this._fields = value;
    }

    printBoard() {
        let board = '';

        for(let i = 0; i < this._fields.length; i++) {
            board += 'Field #' + (i + 1) + ':\n';
            board += this._fields[i].printField();

            if(i < this._fields.length - 1) {
                board += '\n\n';
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

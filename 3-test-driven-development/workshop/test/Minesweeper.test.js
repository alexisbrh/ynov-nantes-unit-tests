const { Mine, Board, Field } = require('../src/Minesweeper')

describe('Minesweeper', () => {

    // TDD
    it('Test printBoard', () => {
        // Then 
        const ymines1 = 1; 
        const xmines1 = 1; 

        // When
        const mine1 = new Mine(xmines1, ymines1);
        const mine2 = new Mine(3, 2);
        const mine3 = new Mine(1, 1);
        const mine4 = new Mine(1, 2);
        const mine5 = new Mine(3, 2);
    
        const field1 = new Field(4, 4, [mine1, mine2]);
        const field2 = new Field(3, 5, [mine3, mine4, mine5]);
        const field3 = new Field(1, 101);
    
        const board = new Board([field1, field2, field3]);

        // Then
        expect(board.printBoard()).toEqual('Field #1:\n' +
            '*100\n' +
            '2210\n' +
            '1*10\n' +
            '1110\n' +
            '\n' +
            'Field #2:\n' +
            '**100\n' +
            '33200\n' +
            '1*100');
    });

    // Unit test
    it('Test calculateNumberOfAdjacentMines -> Mines', () => {
        // When
        const mine1 = new Mine(1, 1);
        const mine2 = new Mine(3, 2);

        const field1 = new Field(4, 4, [mine1, mine2]);

        // Then
        expect(field1.calculateNumberOfAdjacentMines(1, 1)).toEqual('*');
    });

    // Unit test
    it('Test calculateNumberOfAdjacentMines -> Number mines 2', () => {
        // When 
        const mine1 = new Mine(1, 1);
        const mine2 = new Mine(3, 2);

        const field1 = new Field(4, 4, [mine1, mine2]);

        // Then
        expect(field1.calculateNumberOfAdjacentMines(2, 1)).toEqual('2');
    });

    // Unit test
    it('Test calculateNumberOfAdjacentMines -> Number mines 1', () => {
        // When 
        const mine1 = new Mine(1, 1);
        const mine2 = new Mine(3, 2);

        const field1 = new Field(4, 4, [mine1, mine2]);

        // Then
        expect(field1.calculateNumberOfAdjacentMines(1, 2)).toEqual('1');
    });

    // Unit test
    it('Test function printField', () => {
        // When
        const mine1 = new Mine(1, 1);
        const mine2 = new Mine(3, 2);

        const field1 = new Field(4, 4, [mine1, mine2]);

        // Then
        expect(field1.printField()).toEqual(
            '*100\n' +
            '2210\n' +
            '1*10\n' +
            '1110'
        );
    });    
});

describe('Field creation', () => {
    it('Does not work with negative values', () => {
        // Given 
        const n = -1;
        const m = -2;
        
        // When
        // const field = new Field(n, m, []);

        // Then
        expect(() => { new Field(n,m, []) }).toThrow(Error);
    }); 
});
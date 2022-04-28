const { Mine, Board, Field } = require('../src/Minesweeper')

it('Test output', () => {

    const mine1 = new Mine(1, 1)
    const mine2 = new Mine(3, 2)
    const mine3 = new Mine(1, 1)
    const mine4 = new Mine(1, 2)
    const mine5 = new Mine(3, 2)

    const field1 = new Field(4, 4, [mine1, mine2])
    const field2 = new Field(3, 5, [mine3, mine4, mine5])
    const field3 = new Field(0, 0)

    const board = new Board([field1, field2, field3])

    expect(board.printBoard()).toEqual('Field #1:\n' +
        '*100\n' +
        '2210\n' +
        '1*10\n' +
        '1110\n' +
        '\n' +
        'Field #2:\n' +
        '**100\n' +
        '33200\n' +
        '1*100')
})

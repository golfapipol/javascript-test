const XO = require('./xo')

describe('XO Game', () => {
    it('Create Table', () => {
        const xoGame = new XO();
        expect(xoGame).toBeDefined()
        expect(xoGame.table.length).toBe(9)
    });
});
const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');


describe('Game', function() {
    const game = new Game();

    it('should create cards', () => {
        let card = game.createsCard()
        console.log(card)
        expect(card).to.be.an.instanceOf(Card);
    })
})
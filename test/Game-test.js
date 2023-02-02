const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Game', function() {
    const game = new Game();

    it('should create cards', () => {
        let card = game.createsCard()
        expect(card).to.be.an.instanceOf(Card);
    })

    it('should put cards in a deck', () => {
        let deck = game.putsCards();
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should start the game', () => {
        game.start();
    })
})
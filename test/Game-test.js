const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Game', function() {
    const game = new Game();

    it('should create cards', () => {
        let card = game.createsCards()
        expect(card.length).to.equal(30);
    })

    it('should put cards in a deck', () => {
        let deck = game.putsCards();
        console.log(deck)
        expect(deck).to.be.an.instanceOf(Deck);
    })
})
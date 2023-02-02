const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Game', function() {
    const game = new Game();
    
    it('should create cards', () => {
        const cards = game.createsCards()
        expect(cards[0]).to.be.an.instanceOf(Card);
    })
    
    it('should create 30 cards', () => {
        const card = game.createsCards()
        expect(card.length).to.equal(30);
    })

    it('should put cards in a deck', () => {
        const deck = game.putsCards();
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should have a way to start the game', () => {
        expect(game.start).to.be.a('function');
    })
})
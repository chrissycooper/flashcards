const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    let card;
    let turn;

    this.beforeEach(() => {
        card = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
        turn = new Turn("forEach()", card);
    })

    it('should be an instance of Turn', () => {
        expect(Turn).to.be.a('function');
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should be able to take in a user guess', () => {
        expect(turn.userGuess).to.equal("forEach()");
    })

    it('should take in an instantiation of Card for the card in play', () => {
        expect(turn.card).to.equal(card);
    })

    it('should be able to return the user\'s guess', () => {

    })

    it('should be able to return the Card', () => {

    })

    it('should be able to evaluate the guess for correctness', () => {

    })

    it('should be able to give feedback to the user on their guess', () => {
        
    })
});
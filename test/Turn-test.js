const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    let card;
    let turn;

    beforeEach(() => {
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

    it.skip('should be able to return the user\'s guess', () => {
        expect(turn.returnGuess()).to.equal("forEach()");
    })

    it.skip('should be able to return the Card', () => {
        expect(turn.returnCard()).to.equal(card);
    })

    it.skip('should be able to evaluate the guess for correctness', () => {
       let response = turn.evaluateGuess();
       expect(response).to.equal(false);
    })

    it.skip('should be able to give feedback to the user on their guess', () => {
        let feedback = turn.giveFeedback();
        expect(feedback).to.equal('incorrect!');
    })
});
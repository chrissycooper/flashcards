const chai = require('chai');
const { beforeEach } = require('mocha');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe("Round", () => {
    let deck1;
    let card1;
    let card2;
    let card3;
    let setOfCards;
    let round1;
    let turn1;

    beforeEach(() => {
        card1 = new Card(30, "What type of methods are functions that allow you to manipulate the value of a particular data type or class?", ["prototype method", "object", "callback function"], "prototype method")
        card2 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");
        card3 = new Card(28, "Which prototype method returns an array of an object's property values?", ["Object.keys()", "Object.values()", "Object.assign()"], "Object.values()");
        setOfCards = [card1, card2, card3];
        deck1 = new Deck(setOfCards);
        round1 = new Round(deck1);
    })

    it('should have a deck', () => {
        expect(round1.deck).to.deep.equal(deck1);
    });

    it('should be able to return the current card', () => {
        let returnedCard = round1.returnCurrentCard();
        expect(returnedCard).to.equal(setOfCards[0]);
        expect(returnedCard).to.equal(round1.deck.cards[0]);
    })

    describe('takeTurn', () => {
        beforeEach(() => {
            round1.takeTurn("prototype method");
        })

        // it('should create an instance of Turn when a guess is made', () => {
        //    let newTurn = round1.takeTurn("prototype method");
        //    expect(newTurn.userGuess).to.equal("prototype method");
        // })
    
        it('should update the turns count', () => {
            expect(round1.turns).to.equal(1);
        })

        it('should update the currentCard to the next card', () => {
            expect(round1.turns).to.equal(1);
            expect(round1.currentCard).to.deep.equal(round1.deck.cards[1]);
        })

        it('should evaluate guess and record guess', () => {
            expect(round1.incorrectGuesses.length).to.equal(0);
            round1.takeTurn("false");

            expect(round1.incorrectGuesses.length).to.equal(1);
            expect(round1.incorrectGuesses).to.deep.equal([29]);

            round1.takeTurn("Object.assign()");

            expect(round1.incorrectGuesses.length).to.equal(2);
            expect(round1.incorrectGuesses).to.deep.equal([29, 28]);
        }) 

        it('should return feedback on the guess\'s accuracy', () => {
            const feedback1 = round1.takeTurn("true");
            expect(feedback1).to.equal('correct!');
            
            const feedback2 = round1.takeTurn("Object.assign()");
            expect(feedback2).to.equal('incorrect!');
        })

    })

    it.skip('should calculate the percentage of correct guesses', () => {
      //at this point we will have an array of incorrect guesses and total turns, we could take the incorrect guesses.length/total, then multiply by 100 and then subtract from 100 to get the percent correct?  
    })

    it.skip('should be able to end the round with a message', () => {
        //so is the round over when we reach the deck.length-1 array value, or when there are no cards left in the array?
    })


})
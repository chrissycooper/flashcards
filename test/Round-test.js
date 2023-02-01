const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe("Round", () => {
    let deck1;
    let card1;
    let card2;
    let card3;
    let setOfCards;
    let round1;

    beforeEach(() => {
        card1 = new Card(30, "What type of methods are functions that allow you to manipulate the value of a particular data type or class?", ["prototype method", "object", "callback function"], "prototype method")
        card2 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], true);
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
        it('should create an instance of Turn when a guess is made', () => {
        
        })
    
        it('should update the turns count', () => {
            //regardless of whether the guess is correct or incorrect
        })

        it('should update the currentCard to the next card', () => {
            //should the array be .shifted()? or should the index value be updated?
        })

        it('should evaluate guess and record guess', () => {
            //Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
        }) 

        it('should return feedback on the guess\'s accuracy', () => {

        })

    })

    it('should calculate the percentage of correct guesses', () => {
      //at this point we will have an array of incorrect guesses and total turns, we could take the incorrect guesses.length/total, then multiply by 100 and then subtract from 100 to get the percent correct?  
    })

    it('should be able to end the round with a message', () => {
        //so is the round over when we reach the deck.length-1 array value, or when there are no cards left in the array?
    })


})
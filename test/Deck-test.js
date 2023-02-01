const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function () {
    let deck1;
    let card1;
    let card2;
    let card3;
    let setOfCards;


    beforeEach(() => {
        card1 = new Card(30, "What type of methods are functions that allow you to manipulate the value of a particular data type or class?", ["prototype method", "object", "callback function"], "prototype method")
        card2 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], true);
        card3 = new Card(28, "Which prototype method returns an array of an object's property values?", ["Object.keys()", "Object.values()", "Object.assign()"], "Object.values()");
        setOfCards = [card1, card2, card3]
        deck1 = new Deck(setOfCards);
    })

    it('should be initialized with an array of card objects', () => {
        expect(deck1.cards).to.deep.equal(setOfCards);
        expect(deck1.cards[0]).to.deep.equal(card1);
        expect(deck1.cards).to.deep.equal([card1, card2, card3])
    })

    it("should know how many cards are in your deck", () => {
        let numOfCards = deck1.countCards();
        expect(numOfCards).to.equal(3)
    })
})
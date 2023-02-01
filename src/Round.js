const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
    }

    returnCurrentCard() {
        return this.deck.cards[0];
    }

    takeTurn(guess) {
        let turn = new Turn(guess);
        return turn;
    }
}

module.exports = Round;
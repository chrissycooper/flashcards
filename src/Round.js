const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = []
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard);
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.turns++;
        this.currentCard = this.deck.cards[this.turns];
        return turn;
    }
}

module.exports = Round;
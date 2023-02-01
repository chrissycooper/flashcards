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
        const feedback = turn.giveFeedback();

        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }

        this.turns++;
        this.currentCard = this.deck.cards[this.turns];
        return feedback;
    }

    calculatePercentCorrect() {
         //at this point we will have an array of incorrect guesses and total turns, we could take the incorrect guesses.length/total, then multiply by 100 and then subtract from 100 to get the percent correct? 
    }
}

module.exports = Round;
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
         const numIncorrect = this.incorrectGuesses.length;
         const totalGuesses = this.deck.cards.length;
         const percentIncorrect = Math.ceil((numIncorrect/totalGuesses * 100));
         const percentCorrect = 100 - percentIncorrect;

         return percentCorrect;
    }
 
    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
      return  `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round;
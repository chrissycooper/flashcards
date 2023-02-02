const Card = require('./Card');
const Deck = require('./Deck');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round); 
  }

  start() {
      const deck = this.putsCards();
      this.currentRound = new Round(deck);
      this.printMessage(deck, this.currentRound);
      this.printQuestion(this.currentRound);
  }

  createsCards() {
    const newArr = prototypeQuestions.map((element) => {
      return new Card(element.id, element.question, element.answers, element.correctAnswer);
   })
   return newArr;
  }

  putsCards() {
    const deck = new Deck(this.createsCards());
    return deck;
  }
}

module.exports = Game;
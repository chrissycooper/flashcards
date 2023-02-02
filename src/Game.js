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
      util.main(round); //main is called here
  }

  start() {
      const deck = this.putsCards();
      const round = new Round(deck);
      this.printMessage(deck, round);
      this.printQuestion(round);
  }

  createsCard() {
    const randomIndex = Math.floor(Math.random() * prototypeQuestions.length);
    const randomCard = new Card(prototypeQuestions[randomIndex].id, prototypeQuestions[randomIndex].question, prototypeQuestions[randomIndex].answers,prototypeQuestions[randomIndex].correctAnswer )
    return randomCard;
  }

  putsCards() {
   const card1 = this.createsCard()
   const card2 = this.createsCard();
   const card3 = this.createsCard();
   const card4 = this.createsCard();
   const card5 = this.createsCard();
  
   const deck = new Deck([card1, card2, card3, card4, card5]);
   return deck;
  }
}

module.exports = Game;
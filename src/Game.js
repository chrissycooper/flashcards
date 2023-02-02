const Card = require('./Card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

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
      //creates cards
      //puts cards in a Deck
      //creates a new Round using the Deck
      //invokes printMessage
      //invokes printQuestion
  }

  createsCard() {
    const randomIndex = Math.floor(Math.random() * prototypeQuestions.length);
    const randomCard = new Card(prototypeQuestions[randomIndex].id, prototypeQuestions[randomIndex].question, prototypeQuestions[randomIndex].answers,prototypeQuestions[randomIndex].correctAnswer )
    return randomCard
  }

  putsCards() {
    
  }
}

module.exports = Game;
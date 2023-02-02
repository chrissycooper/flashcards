const inquirer = require('inquirer');

const genList = (round) => {  //takes in a parameter
  let card = round.returnCurrentCard(); //0 index of the cards passed into the round
  
  let choices = card.answers.map((answer, index) => { //takes all of the possible answers from the currentCard, and returns them as an object, labels them by index value
    return {
      key: index,
      value: answer
    }
  });
  return {          //this genList function returns this object, with the message of the question, and the object of choices 
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {   //takes in a round
  return Promise.resolve(round);  //returns a Promise, waits for the round in some way?
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id); //takes in the guess not the id
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) { //takes in a round

  const currentRound = await getRound(round); //waits for getRound's return, which is the round
  const getAnswer = await inquirer.prompt(genList(currentRound)); //generates the message/question
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard()) {
      round.endRound();
    } else {
      main(round);
    }
}

module.exports.main = main;
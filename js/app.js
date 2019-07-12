'use strict';

console.log('Good to go');

startQuiz();

function startQuiz() {
  alert('Lets play a game... ;)');
  questionOnex();
  questionTwox();
  questionThreex();
  questionFourx();
  questionFivex();
}

function questionOnex() {

  alert('Ready? START!');

  var questionOne = prompt('Am I a Unicorn?');

  var answerOne = questionOne.toUpperCase().trim();

  console.log(answerOne);

  if (answerOne === 'YES' || answerOne === 'Y') {
    alert('The correct answer is...YES');
  } else if (answerOne === 'NO' || answerOne === 'N') {
    alert('You dun goofed...');
  } else {
    alert('Please answer: YES or NO');
  }
}

function questionTwox() {
  var questionTwo = prompt('Am I native to Iowa?');

  var answerTwo = questionTwo.toUpperCase().trim();

  console.log(answerTwo);

  if (answerTwo === 'NO' || answerTwo === 'N') {
    alert('The correct answer is...NO');
  } else if (answerTwo === 'YES' || answerTwo === 'Y') {
    alert('You dun goofed...');
  } else {
    alert('Please answer: YES or NO');
  }
}

function questionThreex() {
  var questionThree = prompt('Do I support recreational marijuana usage?');
  var answerThree = questionThree.toUpperCase().trim();
  console.log(answerThree);
  if (answerThree === 'YES' || answerThree === 'Y') {
    alert('The correct answer is...YES');
  } else if (answerThree === 'NO' || answerThree === 'N') {
    alert('You dun goofed...');
  } else {
    alert('Please answer: YES or NO');
  }
}

function questionFourx() {
  var questionFour = prompt('Do I love Animals with "hella" passion?');
  var answerFour = questionFour.toUpperCase().trim();
  console.log(answerFour);
  if (answerFour === 'YES' || answerFour === 'Y') {
    alert('The correct answer is...YES');
  } else if (answerFour === 'NO' || answerFour === 'N') {
    alert('You dun goofed...');
  } else {
    alert('Please answer: YES or NO');
  }
}

function questionFivex() {
  var questionFive = prompt('Is bacon my favorite food?');
  var answerFive = questionFive.toUpperCase().trim();
  console.log(answerFive);

  if (answerFive === 'NO' || answerFive === 'N') {
    alert('The correct answer is...NO');
  } else if (answerFive === 'YES' || answerFive === 'Y') {
    alert('You dun goofed...');
  } else {
    alert('Please answer: YES or NO');
  }
}


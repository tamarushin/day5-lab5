'use strict';
//Welcome statement
var user = prompt('Welcome earthling! What is your name?');
console.log('User:', user);
alert('Hi there ' + user + ', I\'m going to ask you some questions so that you can get to know me. After you answer the questions, please read my Bio!');
//First Question
function moon() {var moonBeams = prompt('how many moon beams has tama caught when on pluto?');
  console.log('number of moonbeams:', moonBeams);
  if (moonBeams === 1 || moonBeams === 10){
    alert ('correct Stargazer!');
  }
  else {
    alert ('Oh bummer, that is incorrect!');
  }
}
moon();
//Second Question
function saturn() {var saturnBurns = prompt('how many saturn burns did tama get when going to highschool?');
  console.log('number of saturn burns:', saturnBurns);
  if (saturnBurns === 2 || saturnBurns === 3) {
    alert ('OUCH! but thats correct!');
  }
  else {
    alert ('Nope! Wrong answer!');
  }
}
saturn();
//Third Question
function ven() {var venus = prompt('is tama part venician?\n(Please answer "y" for Yes and "n" for No)');
  console.log('tama part venician:', venus);
  if (venus === 'y'){
    alert ('Good Guess! Tama is part venician');
  }
  if (venus === 'n'){
    alert ('Oh Earthling, No good! Tama is part venician!');
  }
}
ven();
//Fourth Question
function mar() {var mars = prompt('Did Tama work on Mars?\n(Please answer "y" for Yes and "n" for No');
  console.log('work on mars:', mars);
  if (mars === 'y'){
    alert ('Yep! Tama worked at the Mars Club!');
  }
  if (mars === 'n'){
    alert ('Nope! I did! I served Mars Bars to Martians!');
  }
}
mar();
//Fifth Question
function black() {var blackHole = prompt('Did Tama go to highschool in a black hole in the middle of the universe?\n(Please answer "y" for Yes and "n" for No)');
  console.log('blackHole:', blackHole);
  if (blackHole === 'y'){
    alert ('Correctamundo! It was called Hello!Hello!Hello!Hello!, like an echo');
  }
  if (blackHole === 'n'){
    alert ('That is the wrong answer');
  }
}
black();
// sixth question 'while loop'
var moonDust;
//we changed counter from 1 to 0 to give us 4 tries instead of 3 -GP-
var counter = 0;
console.log('counter variable', counter);
console.log('Pounds of Moondust:', moonDust);

while (moonDust !== 32){
  moonDust = parseInt(prompt('How many pounds of moonDust does Tama have?\n(Please enter a number)'));
  console.log('Pounds of moonDust:', moonDust);

  //we changed number to moonDust below. we added a break here. -GP-
  if (moonDust === 32) {
    alert ('Awesome!!');
    break;
  } else if (moonDust < 32) {
    alert ('Incorrect! Too Low!');
    counter++;
  } else if (moonDust > 32) {
    alert ('Bummer! Too high');
    counter++; //we reworded NaN
  } else if (moonDust === NaN || moonDust === null){
    alert ('That is not a number');
    counter++;
  }
  //we put counter === 4 to show only 4 tries were needed. Also put in the break -GP-
  if (counter === 4) {
    alert('Time\'s up, you\'ve guessed 4 times!');
    break;
  }
}
//Seventh question 'For Loop'
var supplies = ['bubbles', 'duct tape', 'superglue', 'lip gloss', 'wax'];
var question = ('What Supplies does Tama need for her journey back to Earth?');
var flag;
console.log (question);

for (var i = 0; i < supplies.length; i++){
  console.log('item at each iteration:', supplies[i]);
  question = prompt('What Supplies does Tama need for her journey back to Earth?');
  break;
  if (question === supplies[i]){
    alert ('That is super smart of you!');
    flag = true;
  }
}
if (!flag){
  alert ('Nope, that is an awsome idea, but not on my supply list');
  counter++;
}
if (counter === 4){
  alert ('You have guessed 4 times. Please read my bio page to see my list of supplies. Thanks for playing my guessing game!');
}

var questionList =[
  {
   question: "What is my favourite food? ",
   answer:"Briyani"
  },
  {
    question:"What is my favourite sport? ",
    answer:"volley ball"
  },
  {
    question:"What is my favourite colour? ",
    answer:"Green"
  },
  {
    question:"where do i live? ",
    answer:"Trichy"
  },
  {
    question:"what is my favourite pet? ",
    answer:"dog"
  }
]


function checkAnswer(question, answer)
{
  var userResponse = readLineSync.question(question);
  if(userResponse.toUpperCase() === answer.toUpperCase()){
    console.log("Cool ... you are right!");
  }
  else{
    console.log("No..better luck next time..");
  }
}

var readLineSync = require("readline-sync");
//var readLineSync = require("readline-sync");
var username = readLineSync.question("May i know your name : ");

console.log("Welcome "+ username + " to the game of How well do you know me ");
for(var i=0; i<questionList.length; i++){
  checkAnswer(questionList[i].question, questionList[i].answer);
}


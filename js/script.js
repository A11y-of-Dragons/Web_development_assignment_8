console.log("script.js connected!");
let title = document.getElementById("page-title");
let instructions = document.getElementById("instructions-for-quiz");
title.textContent = "From the Country or the City";
instructions.textContent = "Pick one option from the following questions and see where you fit in the most!";

let userAnswers =[];

let buttons = document.querySelectorAll("question-block");
let answerButtons = document.querySelectorAll(".answer-btn");

answerButtons.forEach(function(button){
  button.addEventListener("click", function() {
    answerButtons.forEach(function(btn){
        btn.classList.remove("selected");
    });
    button.classList.add("selected");
    let answer = button.getAttribute("data-answer");
    userAnswers.push(answer)
    console.log(userAnswers)

});

});
function displayResult(Answers){
    let score = 0

    for(i in Answers){
        if (Answers[i] === "A"){
            score = score+1;
        }else if (Answers[i]=== "B"){
            score = score+2;
        }else{
            score = score+3; 
        };
         i+1
        };

    if (score < 8 ){
        console.log("you would like the country!")
    }else if (score = 8, 9, 10 ,11){
        console.log ("you'd like the small town life!")
    }else{
        console.log("city life is the way to go!")
    }
    let totalScore =document.getElementById("result-containter");
    totalScore.textContent = score;
    };

let Result = document.querySelectorAll("btn btn-success my-4");
let showResult= document.getElementById("result-container");
Result.forEach(function(button){
  button.addEventListener("click", function() {
    button.classList.add("selected");
    displayResult(userAnswers);

});
});


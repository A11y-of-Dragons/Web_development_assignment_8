console.log("script.js connected!");
let buttons = document.querySelectorAll("button");

let userAnswers={};

buttons.forEach(function(button){
    button.addEventListener("click", function() {
        console.log("you clicked the button");

        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
    });
    button.classList.add("selected");  
    
    
    let clicked = button.textContent; 
    let output = document.getElementById("output-message"); 
     
    });

   
let buttonID = button.dataset.buttonid;
let response = button.dataset.answer;
userAnswers[buttonID] = response;
console.log(userAnswers);
});

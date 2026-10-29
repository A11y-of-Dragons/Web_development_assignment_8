console.log("script.js connected!");
let button = document.querySelectorAll("button");

button.forEach(function(button){
    button.addEventListener("click", function() {
        console.log("you clicked the button");
    });

});

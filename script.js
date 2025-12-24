// Declare variables
let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event listeners

submit.addEventListener("click", checkGuess);

function checkGuess(){
    console.log("Click just happened");
    const userValue = Number(guess.value);
    attempts++;
    //conditionals
    if(userValue === randomNum){
        hint.textContent = 
    "Correct! YOU GUESSED IT!";
    }
    else if (userValue < randomNum){
        hint.textContent = "It's too low! TRY AGAIN!";
    }
    else{
        hint.textContent = "Too high! TRY AGAIN!";
    }

    attemptsText.textContent = "Attempts: " + attempts;


}


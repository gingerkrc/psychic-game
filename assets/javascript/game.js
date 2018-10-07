//Array of possible computer choices
var computerSelection= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var computerGuess = [];

//Reference HTML for text place holder
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");


//Select computer guess
window.onload = function() {
	var compGuess = computerSelection[Math.floor(Math.random() * computerSelection.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

// Start the game
document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);
	console.log(userGuess[0]);

if (userGuess === computerGuess[0]) {
	wins++;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerSelection[Math.floor(Math.random() * computerSelection.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

else {
	losses++;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerSelection[Math.floor(Math.random() * computerSelection.length)];
	computerGuess.push(compGuess);
    console.log(computerGuess[0]);
    

// Display the wins, losses, and guesses
        winsText.textContent = "Hits: " + wins;
		lossesText.textContent = "Misses: " + losses;
		guessesText.textContent = "Letters you have guessed: " + userGuess; 
            
    }
}
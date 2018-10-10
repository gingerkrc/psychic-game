//Array of possible computer choices
var computerSelection= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var computerGuess = [];
var guessesLeft = 10;

//Reference HTML for text place holder
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var guessesLeftText = document.getElementById("guesses-left");

// can make variable that is equal to this equation 
//Select computer guess
window.onload = function() {
	var compGuess = computerSelection[Math.floor(Math.random() * computerSelection.length)];
	console.log(compGuess);
}

// Start the game
document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);
	console.log(userGuess[0]);

// If guesses are not exhausted
if (guessesLeft > 0) {


// Then user can accrue wins if they match the computer guess
	if (userGuess === computerGuess[0]) {
		wins++;
		lettersGuessed = [];
		computerGuess =[];
		var compGuess = computerSelection[Math.floor(Math.random() * computerSelection.length)];
		computerGuess.push(compGuess);
		console.log(computerGuess[0]);
	}

// And user can lose guesses if they don't match computer guess
	else {
	guessesLeft--;
	guessesLeftText.textContent = "Guesses remaining: " + guessesLeft;
	
	}

// User loses game when they have no guesses left
} else {
	document.getElementById("game-loss").textContent= "You are not psychic!";
	losses++;
	lettersGuessed = [];
	computerGuess.length = [];
	var compGuess = computerSelection[Math.floor(Math.random() * computerSelection.length)];
	computerGuess.push(compGuess);
	guessesLeft = 10;
	console.log(computerGuess[0]);
}


// Display the wins, losses, and guesses
        winsText.textContent = "Wins: " + wins;
		lossesText.textContent = "Losses: " + losses;
		guessesText.textContent = "Letter guessed: " + lettersGuessed.join(", "); 
		

            
}
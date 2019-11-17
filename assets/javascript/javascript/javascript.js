
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r'", "s", "t", "u", "v", "w", "x", "y", "z"]

var guesslefttext= document.getElementById("guesses-left-text");
var guesslogtext= document.getElementById("guesses-log-text");
var winstext= document.getElementById("wins-text");
var lossestext=document.getElementById("losses-text");

var wins = 0;
var losses = 0;
var guessleft = 10;
var computerGuess = letterArray[Math.floor(Math.random() * 26)];
var userGuesses = [];

startGame();

function startGame() {
    guessleft = 10;
    userGuesses = [];
    guesslogtext.innerHTML = userGuesses;
    winstext.innerHTML = "Wins: " + wins;
    lossestext.innerHTML = "Losses: " + losses;
    guesslefttext.innerHTML = "Attempts Remaining: " + guessleft; 
}

// When user presses key
document.onkeyup = function(event) {

    // Capture key as userGuess and push to array
    var userGuess = event.key;
    userGuesses.push(" " + userGuess);

    // Subtract 1 guess remaining and display
    guessleft --;
    guesslefttext.innerHTML = "Attempts Remaining: " + guessleft;

    // Add guess to user guesses display
    guesslogtext.innerHTML = userGuesses;
 
    // If user guess is correct 
    if (userGuess === computerGuess) {
        // Add 1 to wins
        wins ++;
        // Update wins display
        winstext.innerHTML = "Wins: " + wins;
        // Game over alert
        alert("You win! Press OK to play again.");
        // Reset game
        startGame();
    }
    // If there are no guesses remaining
    else if (guessleft === 0) {
        // Add 1 to losses
        losses ++;
        // Update losses display
        lossestext.innerHTML  = "Losses: " + losses;
        // Game over alert
        alert("You lose! Press OK to play again.");
        // Reset game
        startGame();
    }
}
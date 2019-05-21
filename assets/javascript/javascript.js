
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r'", "s", "t", "u", "v", "w", "x", "y", "z"]


var guesslefttext= document.getElementById("guess-left-text");
var guesslogtext= document.getElementById("guess-log-text");
var winstext= document.getElementById("wins-text");
var lossestext=document.getElementById("losses-text");


function reset() {
    var wins = 0;
    alert("GAME OVER");
    var losses = 0;
    var guessleft = 10;
    var userGuesses =[];
    winstext.innerHTML = "Wins: " + wins;
    lossestext.innerHTML = "Losses: " + losses
    guesslefttext.innerHTML = "Attempts Remaining: " + guessleft;  
    guesslogtext.innerHTML = "Your guesses so far: "
}
var wins = 0;
var losses = 1;
var guessleft = 10;
var computerGuess = letterArray[Math.floor(Math.random() * 26)];
var userGuesses = [];
document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuesses.push(" " + userGuess);
    guessleft --;
    guesslefttext.innerHTML = "Attempts Remaining: " + guessleft;
    guesslogtext.innerHTML = "Your guesses so far: " + userGuesses;
 
    winstext.innerHTML = "Wins: " + wins;
    lossestext.innerHTML  = "Losses: " + losses;
    
    if (userGuess === computerGuess) {
        wins ++;
    }
    else {
        losses ++;
    
    }
    
// If no guesses left
if (guessleft == 0) {
   reset();
   }}
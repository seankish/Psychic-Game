
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r'", "s", "t", "u", "v", "w", "x", "y", "z"]

var guesslefttext= document.getElementById("guess-left-text");
var guesslogtext= document.getElementById("guess-log-text");
var winstext= document.getElementById("wins-text");
var lossestext=document.getElementById("losses-text");

var wins = 0;
var losses = 0;
var guessleft = 10;

var computerGuess = letterArray[Math.floor(Math.random() * 26)];


for (var i=0; i < 9; i++) {
    document.onkeyup = function(event) {
    var userGuess = event.key;
    guessleft --;
    guesslogtext.textContent = "Your guesses so far: " + userGuess
    winstext.textcontent = "wins: " + wins;
    lossestext.textcontent = "losses:" + losses;
    console.log(guessleft);
    console.log(computerGuess)
    console.log(userGuess)
    if (userGuess === computerGuess) {
    wins ++;
    // winstext.textcontent = "Wins: " + this.wins
}
else {
    losses ++;
    // lossestext.textcontent = "losses: " + this.losses
}
}
}
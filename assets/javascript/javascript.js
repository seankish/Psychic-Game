
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r'", "s", "t", "u", "v", "w", "x", "y", "z"]

var guesslefttext= document.getElementById("guess-left-text");
var guesslogtext= document.getElementById("guess-log-text");
var winstext= document.getElementById("wins-text");
var lossestext=document.getElementById("losses-text");

var wins = 0;
var losses = 0;
var guessleft = 9;

var computerGuess = letterArray[Math.floor(Math.random() * 26)];


document.onkeyup = function(event) {
    var userGuess = event.key;
 

    guesslogtext.textContent = "Your guesses so far: " + userGuess}

    // guessleft: function() {
    
    //     this.guessleft = this.guessleft - 1
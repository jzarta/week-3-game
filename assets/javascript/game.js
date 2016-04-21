// Sets the computer choices 
var computerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                       'j', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 
                       'u', 'v', 'w', 'x', 'y', 'z'];

// Declares the tallies to 0 
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var lettersLeft = [];

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // This sets the computer guess equal to the random.
    var computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    console.log (computerGuess)

     // It tests to determine if the computer or the user won the round and then increments 
        if (userGuess == computerGuess){
            wins++;
        } else { 
            losses++;
        }

        //lettersLeft.push

        // Taking the tallies and displaying them in HTML
        var html = "<p>Guess what letter I'm thinking of?</p>" +
        "<p>wins: " + 
        wins + 
        "</p>" +
        "<p>losses: " + 
        losses + 
        "</p>" +
        "<p>guesses left: " + 
        guessesLeft + 
        "</p>" + 
        "<p> letters left: " + lettersLeft + "</p>";

        // Placing the html into the game ID
     document.querySelector('#game').innerHTML = html;

}	



	
// Sets the computer chooices 

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Declares the tallies to 0 to 9
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessessofar = 0;
var LettersGuessed = [];

// When the user presses the key it records the keypress and then sets it to userguess

document.onkeyup = function(event) {
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerChoice = letters[Math.floor(Math.random() * letters.length)];

//picks a random letters between a and z
	
		function initGame(){
	   
	// User chooses a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z.
	
	
	if (userguess == computerChoice){
		wins++
		} else {
			losses++
		}
			guessesLeft--
		LettersGuessed.push(userguess)
		

	// Taking the tallies and displaying them in HTML
	var html = "<p>The Psychic Game</p>" +
	"<p>wins: " + 
	wins + 
	"</p>" +
	"<p>losses: " + 
	losses + 
	"</p>" +
	guessesLeft
	"<p>guessesLeft: " + 
	yourGuessessofar
	"<p>yourGuessessofar: " + 
	"</p>"
	LettersGuessed
	"<p>LettersGuessed: " +
	"</p>"
	
	initGame();

	document.querySelector('#game').innerHTML = html
	
	}

	
}		


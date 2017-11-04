var wordsArr = ['chocolate', 'lollipop', 'reese', 'licorice', 'gummies', 'peppermint'];
// Randomly selects a new word from  wordsArr
var randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];

// Holds word blanks for user to guess a word
var answerBlanksArr = [];
// Number of guesses remaining, each game starts with 12 guesses
var guessCounter = 15;
var lettersGuessed = [];
var currentWord;
var userPressed;


// Converts randomly chosen word into blank spaces '_'
function createWordBlanks() {
	for (var i = 0; i < randomWord.length; i++) {
		answerBlanksArr[i] = '-';
		currentWord = answerBlanksArr.join('');
		}
		document.getElementById('currentWordID').innerHTML = currentWord;
		console.log(currentWord);
};

createWordBlanks();


document.onkeyup = function(event) {
	userPressed = event.key; 
	checkLetters();
	console.log(userPressed);
	guessCount();
	console.log(guessCounter);
}

console.log(randomWord);

function checkLetters() {
	for (var j = 0; j < randomWord.length; j++) {	
	}
	if (randomWord.indexOf(userPressed) === -1) {
			lettersGuessed.push(userPressed);
			document.getElementById('guesses').innerHTML = lettersGuessed;
	}
	else {
		var randomArray = currentWord.split('');
		randomArray[randomWord.indexOf(userPressed)] = userPressed;
		currentWord = randomArray.join('');

		var currentArray = randomWord.split('');
		currentArray[randomWord.indexOf(userPressed)] = '+';
		randomWord = currentArray.join('');

		console.log(currentWord);
		document.getElementById('currentWordID').innerHTML = currentWord;
	}
};

// M
function guessCount() {
	if (userPressed) {
		guessCounter--;
		if (guessCounter > 0) {
			document.getElementById('score').innerHTML = guessCounter;
		} else {
			document.getElementById('result').innerHTML = ('You have lost the game!');
			newGame();
		}
	}
};

// Reset Game Button
	// Create Button
var button = document.createElement("button");
button.innerHTML = "Start New Game";

	// Append Button to new-game div
	var gameButton = document.getElementById("new-game");
	gameButton.appendChild(button);

	// Add on-click event to reset game
	button.addEventListener ("click", function() {
	  newGame();
	});

// Reset Game Function
function newGame() {
    location.reload();
};

function winGame() {
	if (guessCount >currentWord === randomWord) {
		alert('You won!');
	}
}






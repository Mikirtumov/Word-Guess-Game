// Create all vairables for game logic

//wins
var wins = 0;
//loses
var lose = 0;
//guesses that are left
var guesses = 9;
//letters that were already guessed
var guessed = [];



// Computer choice bank (array of the alphebet)
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var compGuess = "";

// var compGuess = computerChoices[compGuess];

console.log(compGuess);


// creating a function that starts/resets game
function newGame() {
  // reset the important game variables
  guesses = 9;
  guessed = [];

  // randomly chooses a computer guess
  var randomCompChoice = [Math.floor(Math.random() * computerChoice.length)];
  compGuess = computerChoice[randomCompChoice];
}

// on key up event to know what letter is being hit
document.onkeyup = function (event) {

  var userGuess = event.key.toLowerCase();
  guessed.push(userGuess);

  document.getElementById("guessed").innerHTML = guessed;
  guesses--;


  document.getElementById("guesses").innerHTML = guesses;

  if (guesses === 0) {
    lose++;
    document.getElementById("lose").innerHTML = lose;
    newGame();
  }
  else if (userGuess === compGuess) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    newGame();
  }
}

// runs new game fuction at initial load
newGame();

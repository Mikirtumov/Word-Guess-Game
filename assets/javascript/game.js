var wins =0;
var lose =0;
var guesses =9;
var guessed =[];




var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var compGuess = Math.floor(Math.random() * computerChoices.length) + 1;

var compGuessLetter = computerChoices[compGuess];

console.log(compGuess);
console.log(compGuessLetter);

function restartGuess(){
  Math.floor(Math.random() * computerChoices.length) + 1;
}

function restart(){
     guesses = 9;
     guessed =[];   
     restartGuess();
}
document.onkeyup = function(event) {

      var userGuess = event.key.toLowerCase();
      guessed.push(userGuess);
      
      document.getElementById("guessed").innerHTML=guessed;
      guesses--;
      
      
      document.getElementById("guesses").innerHTML=guesses;
      
      if (guesses === 0){
        lose++;
        document.getElementById("lose").innerHTML=lose;
        restart();
      }
      else if (userGuess === compGuessLetter){
        wins++;
        document.getElementById("wins").innerHTML=wins;
        restart();
      }
}

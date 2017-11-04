
var techCo = ["amazon", "google", "microsoft", "twitter", "facebook", "instagram", "veeam", "cisco", "intel", "apple"]
//Choose random string from tvShows array
var randNum = Math.floor(Math.random() * techCo.length);
var randCo = techCo[randNum];
var lettersInCompany = Array.from(randCo);
var underscores = [];
console.log(randNum);
console.log(randCo);
console.log(lettersInCompany);
var guessesRemaining = 10;
var wrongGuess = []

//create underscore based on legth of the techCo
function createUnderscores() {
  for (var i = 0; i < randCo.length; i++) {
    underscores.push('_');
  }
}

//createUnderscores();
  createUnderscores();
console.log(underscores);
console.log(underscores.join(' '));

//Start new game when new game button is pressed and insert underscores to represent the randCo string
  document.getElementById('wrong-letters').innerHTML = "<p>  </p>"
  document.getElementById('randomShow').innerHTML = "<div>"+underscores.join(' ')+"</div>";
  document.getElementById('games-remaining').innerHTML = "<p>Guesses:</p>" + guessesRemaining;

  //Get the key pressed by the user

  document.onkeyup = function(event) {
    var letterPressed = event.key;

    console.log(letterPressed);

    //if the letter pressed matches a letter in lettersInCompany, replace the letter in underscores

    if (lettersInCompany.indexOf(letterPressed) > -1) {
      for (var i = 0; i < underscores.length; i++) {
        if (lettersInCompany[i] == letterPressed) {
          underscores[i] = letterPressed;
          document.getElementById('randomShow').innerHTML = underscores.join(' ');
        }
      }
    } else {
        guessesRemaining--;
        wrongGuess.push(letterPressed);
        document.getElementById('games-remaining').innerHTML = "<p>Guesses:</p>" + guessesRemaining;
        document.getElementById('wrong-letters').innerHTML = wrongGuess
      };


    if (guessesRemaining == 0) {
      document.getElementById('randomShow').innerHTML = "YOU LOSE!"
    };


    if (document.getElementById('randomShow').innerHTML == lettersInCompany) {
      alert('match!');
    }

  };

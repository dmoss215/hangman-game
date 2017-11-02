var tvShows = ["Game of Thrones", "The Last Man on Earth", "Stranger Things", "Seinfeld", "Curb Your Enthusiasm", "The Big Bang Theory"];
var techCo = ["Amazon", "Google", "Microsoft", "Twitter", "Facebook", "Instagram", "Veeam", "Cisco", "Intel", "Apple"]
//Choose random string from tvShows array
var randNum = Math.floor(Math.random() * tvShows.length);
var randShow = tvShows[randNum];
var randShowString = randShow.split(" ");
var underscores = [];
console.log(randNum);
console.log(randShow);
console.log(randShow.length);
console.log(randShowString);

//get character function to find spaces

var getChar = function(string, char){
  for(var i=0;i<string.length;i++)
  {
    if(string.charAt(i)==char) console.log(i);
  }
}

getChar(randShow, " ");
var spacePosition = getChar(randShow, " ");
console.log(spacePosition);

// Create a replace at function to replace the _ with a space
//"hello_world".replace("_", " ");
randShowString.forEach(function("Seinfeld")) {
  underscore.push('$');
}

//create underscore based on legth of the tvShow
function createUnderscores() {
  for (var i = 0; i < randShow.length; i++) {
    underscores.push('_');
  }
  // (for loop) if the index number in randShow is a space, replace underscore with space in underscores
  // replace underscore with a space if it is a space in the randShow string

}
createUnderscores();
console.log(underscores);

//Start new game when new game button is pressed
function newGame(){
  document.getElementById('randomShow').innerHTML = "<div>"+underscores+"</div>";
}

//Get the key pressed by the user
document.onkeyup = function(event) {
  var letterPressed = event.key;

}


// Insert item from tvShows array under "TV Show: in HTML"
// document.getElementById('#').innerHTML = "";

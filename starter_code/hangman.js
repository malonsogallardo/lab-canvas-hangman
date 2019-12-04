let hangman;

class Hangman {
  constructor() {
   this.words = ["ashe","warwick","heimindinger","tryndamere"];
   this.secretWord = "";
   this.letters = [];
   this.guessedLetter = ""
   this.errorsLeft = 10;
}

getWord() {
  return this.words[Math.floor(Math.random()*this.words.length)];
}

checkIfLetter(keyCode) {
  let letter = ["a","b","c","d","e","f","g","h","y","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return letter.includes(String.fromCharCode(keyCode).toLowerCase())

}

checkClickedLetters(key) {
  if(this.letters.includes(key)){
  return false;
  }
  return true;
}

addCorrectLetter(i) {
  if


  push(i).this.guessedLetter
  console.log(this.guessedLetter)
}

addWrongLetter(letter) {

}

checkGameOver() {

}

checkWinner() {
  return true;
}

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};

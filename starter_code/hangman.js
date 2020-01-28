let hangman;

class Hangman {
  constructor() {
    this.words = ["ashe", "warwick", "heimindinger", "tryndamere"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    let letter = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "y",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    return letter.includes(String.fromCharCode(keyCode).toLowerCase());
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      return false;
    }
    return true;
  }

  addCorrectLetter(i) {
    if (this.secretWord.includes(this.secretWord[i])) {
      this.guessedLetter += this.secretWord[i].toUpperCase();
      this.checkWinner();
    }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft -= 1;
      this.checkGameOver();
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    }
    return false;
  }

  checkWinner() {
    if (
      this.secretWord.localeCompare(this.guessedLetter) &&
      this.secretWord.length === this.guessedLetter.length
    ) {
      return true;
    }
    return false;
  }
}

document.getElementById("start-game-button").onclick = () => {
  console.log("hola")
  hangman = new Hangman();
};

document.onkeydown = e => {};
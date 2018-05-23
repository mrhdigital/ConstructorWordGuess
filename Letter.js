// Make a constructor, Letter

var Letter = function (letter) {
    // A string value to store the unlerlying character for the letter
    this.letter = letter;
    // A boolean value that stores whether the letter has been guessed yet
    this.guessedYet = false;
    // A method that returns the underlying character if the letter has been guessed.
    this.toString = function () {
        if (this.guessedYet) {
            return ` ${this.letter} `;
            // or a placeholder '_' if the letter has not been guessed   
        } else {
            return ' _ ';
        }
    };


    // A method that takes a character as an argument and checks it against the underlying 
    // character, updating the stored boolean value to true if it was guessed correctly
    this.checkGuess = function (guess) {
        // let guessedYet = this.guessedYet; var will not work it gives  .split is not defined error
        let guessedYet = this.guessedYet;
        if (guess.toLowerCase() === this.letter.toLowerCase()) {
            this.guessedYet = true;
            return { correct: true, guessedYet: guessedYet };
        } else {
            return { correct: false, guessedYet: guessedYet };
        }
    };
};

module.exports = Letter; undefined

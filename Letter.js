// Make a constructor, Letter

var Letter = function(letter) {
// A string value to store the unlerlying character for the letter
    this.letter = letter;
 // A boolean value that stores whether the letter has been guessed yet
 this.guessYet = false;
 // A method that returns the underlying character if the letter has been guessed.
 // or a placeholder '_' if the letter has not been guessed
this.toSting = function() {
    if (this.guessedYet) {
        return ` ${this.letter} `;

    } else {
        return ' _ ';
    }
}; 

// A method that takes a character as an argument and checks it against the underlying 
// character, updating the stored boolean value to true if it was guessed correctly

}
console.log(Letter);

module.export = Letter;
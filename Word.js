
var Letter = require('./Letter');
// make a consturtor Word that depends on the Letter constructor. This is used to create an object
// representing the current word the user is attempting to guess
// Word Object Constructor

var Word = function (word) {
    this.word = word.split('').map(function (letter) {
        return new Letter(letter);
    });
    this.displayWord = function () {
        console.log(this.word.join(''));
    };
    this.checkGuess = function (guess) {
        var isCorrect = 'Incorrect!';
        var result;
        var guessingComplete = true;
        this.word.forEach(function (letter) {
            result = letter.checkGuess(guess);
            if (result.correct && isCorrect === 'Incorrect!') {
                if (result.guessedYet) {
                    isCorrect = 'You already guessed that!';
                } else {
                    isCorrect = 'Correct!';
                }
            }
            if (!result.guessedYet) {
                if (!result.correct) {
                    guessingComplete = false;
                }
            }
        });
        return { isCorrect: isCorrect, guessingComplete: guessingComplete };
    };
};

module.exports = Word;
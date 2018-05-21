// make a consturtor Word that depends on the Letter constructor. This is used to create an object
// representing the current word the user is attempting to guess
var Letter = require('./Letter');

var Word = function(word) {
    this.word = word.split('').map(function(letter){

        return new Letter(letter);
    });
}


module.exports = Word;
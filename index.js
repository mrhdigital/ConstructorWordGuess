var Word = require("./word.js")
var inquirer = require("inquirer")

var wordArray = [
    "toucan","parrot", "hornbill", 
    "woodpecker","penguin","passerine",
    "heron","cuckoo"];
    var totalGuesses = "";
    var target = "";


    

 function startGame() {
     randonWord = wordArray[Math.floor(Math.random() * wordArray.length)];
     totalGuesses = randonWord.length +10;
     target = new Word(randomWord);
     console.log(target);
 }   

 startGame();
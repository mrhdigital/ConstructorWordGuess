var Word = require('./Word');
var inquirer = require("inquirer");

var wordArray = [
    "toucan","parrot", "hornbill", 
    "woodpecker","penguin","passerine",
    "heron","cuckoo"];
    var totalGuesses = "";
    var target = "";
    var playedAlready = false;
    var wordObject;
    var randomSelectionFromWordArray;


    var selectRandomWord = function() {
        return wordArray[Math.floor(Math.random() *10)];

    };


    const playGame = function(){
        
        randomSelectionFromWordArray = selectRandomWord();
        wordObject = new Word(randomSelectionFromWordArray);
        console.log('Here is your randomly selected word:');
        wordObject.displayWord();
       // numberOfGuesses = 12;
        //guess();
    };

    const inquire = function(){
        inquirer.prompt([
            {
                type: "confirm",
                message: `Do you want to play ${playedAlready ? 'again?' : 'a round?'}`,
                name: "play"
            }
        ]).then(function(answer){
            if (answer.play) {
                console.log("Let's play!");
                playedAlready = true;
                playGame();    
            } else {
                console.log('Ok! See ya later!');
            }
        }).catch(function(error){
            console.log("Oh boy, it broke: " + error);
        });
    };
    
    // Function Calls
    
    inquire();

 
var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordArray = [
    "toucan","parrot", "hornbill", 
    "woodpecker","penguin","passerine",
    "heron","cuckoo"];
    var totalGuesses = "";
    var target = "";
    var playedAlready = false;


    var selectedRandomWord = function() {
        return wordArray[Math.floor(Math.random() *10)];

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

 
//we are writing a rock-paper-scissors game to be played in console log

// Step 1: initialize our rock paper and scissors variables

let rock = "rock";
let paper ="paper";
let scissors ="scissors";



//Step 1.5: create a function that selects a random integer of 1,2,3

function getRandomInt () {

    let max = 4;
    let min = 1;

return Math.floor(Math.random() * (max-min) + min);

}



//Step 1.6: create a variable that calls our getRandomInt function so that we can use the result in our next function
result = getRandomInt();

console.log(result)






// Step 2: create function getComputerChoice that will select one of the following variables rock, paper, scissors

function getComputerChoice () {

    if (result === 1) {
    return "rock"
    }

    else if (result === 2) {
        return "paper"
        }
      
        else {
            return "scissors"
            }

}

const CPU = getComputerChoice ();

console.log(CPU)
// Step 3: create function playRound that takes parameter playerSelection and computer selection

    //Step 3a: make sure that playerSelection is converted .toLowerCase
    
    //Step 3b: write an if statement for case a:
    // IF
    // playerSelection = rock and computer selection = scissors
    // OR playerSelection = scissors and computer selection = paper
    // OR  playerSelection = scissors and computer selection = paper

    //then return "You win! {playerSelection} beats {computerSelection}"


    //Step 3c: write an if statement for case b:
    // IF
    // computerSelection= rock and playerSelection = scissors
    // OR computerSelection = scissors and playerSelection= paper
    // OR  computerSelection = scissors and playerSelection= paper

    //then return "You lose! {computerSelection} beats {playerSelection}"

    //use Console.log to see if we are returning the correct thing console.log(playRound(playerSelection, computerSelection));

    //Step 4: Create a playGame function that calls playRound 5 times and keeps score and reports a winner.

        
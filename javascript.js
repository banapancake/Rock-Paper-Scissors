//we are writing a rock-paper-scissors game to be played in console log

//add buttons so through DOM to create a UI

let span = document.getElementById("span")

let btn1 = document.createElement("button");
let  btn2 = document.createElement("button");
let  btn3 = document.createElement("button");

btn1.textContent = "rock";
btn2.textContent = "paper";
btn3.textContent = "scissors";

span.appendChild(btn1); 
span.appendChild(btn2);
span.appendChild(btn3);



//initialize our rock paper and scissors variables
function reportScore (){



let totalWins = 0;

let totalLosses = 0;



//for (i = 0; i < 5; i++) {


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

const computerSelection = getComputerChoice ();

console.log(computerSelection)

// Step 2.5 create a function that can take a players input

   //const playerSelection = prompt ();

   //console.log (playerSelection)

// Step 3: create function playRound that takes parameter playerSelection and computer selection


function playRound (playerSelection, computerSelection) {
    console.log("I'm here");

//event listener for btn 1


btn1.addEventListener("click", event => {
    let playerSelection = "I select rock!"
    console.log(playerSelection);
    if(computerSelection == "paper") {
    let loss = `You lose this round! ${computerSelection} beats rock. The score is computer: ${computerWins} user: {computerLosses}`
    console.log("loss");
    }
    if(computerSelection == "scissors") {
        let win = `You win this round! Rock beats ${computerSelection} The score is computer: ${computerWins} user: {computerLosses}`
        console.log("win");
        }
    if(computerSelection == "rock") {
        let tie = `You tied! The score is computer: ${computerWins} user: {computerLosses}`
        console.log("tie");
            }
    
    });
    
    //event listener for btn 2
    
    btn2.addEventListener("click", event => {
        let playerSelection = "I select scissors!"
    console.log(playerSelection);
        if(computerSelection == "scissors") {
        let loss = `You lose this round! ${computerSelection} beats rock. The score is computer: ${computerWins} user: {computerLosses}`
        console.log("loss");
        }
        if(computerSelection == "rock") {
            let win = `You win this round! Rock beats ${computerSelection} The score is computer: ${computerWins} user: {computerLosses}`
            console.log("win");
            }
        if(computerSelection == "paper") {
            let tie = `You tied! The score is computer: ${computerWins} user: {computerLosses}`
            console.log("tie");
                }
        
        });
    
        //event listener for btn 2
    
    btn3.addEventListener("click", event => {
        let playerSelection = "I select scissors!"
    console.log(playerSelection);
        if(computerSelection == "rock") {
        let loss = `You lose this round! ${computerSelection} beats rock. The score is computer: ${computerWins} user: {computerLosses}`
        console.log("loss");
        }
        if(computerSelection == "paper") {
            let win = `You win this round! Rock beats ${computerSelection} The score is computer: ${computerWins} user: {computerLosses}`
            console.log("win");
            }
        if(computerSelection == "scissors") {
            let tie = `You tied! The score is computer: ${computerWins} user: {computerLosses}`
            console.log("tie");     
                }
        
        });
    




};



 /* const declareWinner = playRound (playerSelection, computerSelection); 

console.log(declareWinner)

if (i===4) {

    if(totalWins > totalLosses) {

console.log(`You win the game! You won ${totalWins} times and lost ${totalLosses} times`)
    }
    else if (totalLosses > totalWins) {

        console.log(`You lost the game! You won ${totalWins} times and lost ${totalLosses} times `)
    }

    else if(totalLosses === totalWins) {

        console.log(`It's a tie! ${totalWins} to ${totalLosses}`)

    } */ 
playRound();
}

//}





reportScore(); 

//split



/* for (i = 0; i<5; i++) { function playGame(declareWinner) {






    if (declareWinner ===  `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}.`) {
    
    totalWins = totalWins + 1;

        return `You have ${totalWins} total wins`
    


    }

else {

    totalLosses = totalLosses + 1;

return `You have ${totalLosses} total losses`
}
    }

console.log(playGame(declareWinner))

} */


// playGame(declareWinner)


// console.log(playGame(declareWinner)) 

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

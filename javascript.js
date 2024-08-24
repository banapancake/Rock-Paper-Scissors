

//Create rock paper scissors game with UI through DOM manipulation



let span = document.getElementById("span")

let btn1 = document.createElement("button");
let  btn2 = document.createElement("button");
let  btn3 = document.createElement("button");

document.body.style.backgroundColor = "teal";


btn1.style.backgroundColor = "grey";
btn1.style.width = "80px";
btn1.style.height = "60px";
btn1.style.margin = "20px";

btn2.style.backgroundColor = "grey";
btn2.style.width = "80px";
btn2.style.height = "60px";
btn2.style.margin = "20px";

btn3.style.backgroundColor = "grey";
btn3.style.width = "80px";
btn3.style.height = "60px";
btn3.style.margin = "20px";


btn1.textContent = "rock";
btn2.textContent = "paper";
btn3.textContent = "scissors";

span.appendChild(btn1); 
span.appendChild(btn2);
span.appendChild(btn3);




function reportScore (){



let totalWins = 0;

let totalLosses = 0;

let computerWins = 0;
let computerLosses = 0;


//initialize our rock paper and scissors variables


let rock = "rock";
let paper ="paper";
let scissors ="scissors";





//create a function that selects a random integer of 1,2,3

function getRandomInt () {

    let max = 4;
    let min = 1;

return Math.random() * 10

}




function computerSelection () {

  if (result < 4) {
    return "rock"
    }

    else if ((4 < result) && (result < 7)) {
        return "paper"
    }
      
        else {
            return "scissors" }
        
        
} 


function endGame () {

    if ((computerWins > 4) || (computerLosses > 4)) { 
        
        
        alert(`Game Over! 

            Final Score 
            
            Computer: ${computerWins}

            You: ${computerLosses} 
        
            Play Again? `);
            location.reload();

    
    };
};


btn1.addEventListener("click", event => {
    let playerSelection = "ROCK"
    result = getRandomInt();
    console.log(`I select ${playerSelection}`);
    let compChoice = computerSelection(getRandomInt());
    console.log(computerSelection());
    if(compChoice == "paper") {
        console.log("bazinga");
        computerWins += 1;
    let loss = `You lose this round! ${compChoice.toUpperCase()} beats ${playerSelection}. The score is computer: ${computerWins} user: ${computerLosses}`
    console.log(loss);
    let newDiv = document.createElement("div"); // appending UI
    let textContent = document.createTextNode(`${loss}`); //appending UI
    newDiv.appendChild(textContent); // appending UI
    document.getElementById("span").appendChild(newDiv);

    }
    else if(compChoice == "scissors") {
        console.log("bazinga");
        computerLosses += 1;
        let win = `You win this round!  ${playerSelection} beats ${compChoice.toUpperCase()} The score is computer: ${computerWins} user: ${computerLosses}`
        console.log(win);
        let newDiv = document.createElement("div"); // appending UI
    let textContent = document.createTextNode(`${win}`); //appending UI
    newDiv.appendChild(textContent); // appending UI
    document.getElementById("span").appendChild(newDiv);

        }
    else if(compChoice == "rock") {
        console.log("bazinga");
        let tie = `You tied! The score is computer: ${computerWins} user: ${computerLosses}`
        console.log(tie);
        let newDiv = document.createElement("div"); // appending UI
            let textContent = document.createTextNode(`${tie}`); //appending UI
            newDiv.appendChild(textContent); // appending UI
            document.getElementById("span").appendChild(newDiv); 
            }
           
            endGame();   
    });
    
    //event listener for btn 2
    
    btn2.addEventListener("click", event => {
        result = getRandomInt();
        let playerSelection = "PAPER"
        console.log(result);
        let compChoice = computerSelection(getRandomInt());
        console.log(computerSelection());
        console.log(`I select ${playerSelection}`);
        if(compChoice == "scissors") {
            computerWins += 1;
            console.log("bazinga");
        let loss = `You lose this round! ${compChoice.toUpperCase()} beats ${playerSelection}. The score is computer: ${computerWins} user: ${computerLosses}`
        console.log(loss);
        let newDiv = document.createElement("div"); // appending UI
        let textContent = document.createTextNode(`${loss}`); //appending UI
        newDiv.appendChild(textContent); // appending UI
        document.getElementById("span").appendChild(newDiv);
        }
       else if(compChoice == "rock") {
        console.log("bazinga");
        computerLosses += 1;
            let win = `You win this round!  ${playerSelection} beats ${compChoice.toUpperCase()}. The score is computer: ${computerWins} user: ${computerLosses}`
            console.log(win);
            let newDiv = document.createElement("div"); // appending UI
            let textContent = document.createTextNode(`${win}`); //appending UI
            newDiv.appendChild(textContent); // appending UI
            document.getElementById("span").appendChild(newDiv);
            }
       else if(compChoice == "paper") {
        console.log("bazinga");
            let tie = `You tied! The score is computer: ${computerWins} user: ${computerLosses}`
            console.log(tie);
            let newDiv = document.createElement("div"); // appending UI
            let textContent = document.createTextNode(`${tie}`); //appending UI
            newDiv.appendChild(textContent); // appending UI
            document.getElementById("span").appendChild(newDiv); 
                }

                endGame();  
        
        });
    
        //event listener for btn 2
    
    btn3.addEventListener("click", event => {
        let playerSelection = "SCISSORS"
        result = getRandomInt();
        console.log(`I select ${playerSelection}`);
    let compChoice = computerSelection(getRandomInt());
    console.log(computerSelection());
        if(compChoice == "rock") {
        console.log("bazinga");
        computerWins += 1;
        let loss = `You lose this round! ${compChoice.toUpperCase()} beats  ${playerSelection}. The score is computer: ${computerWins} user: ${computerLosses}`
        console.log(loss);
        let newDiv = document.createElement("div"); // appending UI
        let textContent = document.createTextNode(`${loss}`); //appending UI
        newDiv.appendChild(textContent); // appending UI
        document.getElementById("span").appendChild(newDiv);
        }
       else if(compChoice == "paper") {
        console.log("bazinga");
        computerLosses += 1;
            let win = `You win this round! ${playerSelection} beats ${compChoice.toUpperCase()}. The score is computer: ${computerWins} user: ${computerLosses}`
            console.log(win);
            let newDiv = document.createElement("div"); // appending UI
            let textContent = document.createTextNode(`${win}`); //appending UI
            newDiv.appendChild(textContent); // appending UI
            document.getElementById("span").appendChild(newDiv);
            }
       else if(compChoice == "scissors") {
        console.log("bazinga");
            let tie = `You tied! The score is computer: ${computerWins} user: ${computerLosses}`
            console.log(tie); 
            let newDiv = document.createElement("div"); // appending UI
            let textContent = document.createTextNode(`${tie}`); //appending UI
            newDiv.appendChild(textContent); // appending UI
            document.getElementById("span").appendChild(newDiv);    
                }

                endGame();    
        
        });

       

    
        


};









reportScore(); 



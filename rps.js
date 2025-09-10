let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let results = document.querySelector("#results");
let score = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

let computerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

let playRound = (playerSelection, computerSelection) => {
    if(playerSelection == computerSelection){
        return "Its a tie!";
    }
    else if((playerSelection=="rock" && computerSelection=="scissors")||
           (playerSelection=="paper" && computerSelection=="rock")||
           (playerSelection=="scissors" && computerSelection=="paper")
){
    playerScore++
    return `You win! ${playerSelection} beats ${computerSelection}`;
} else {
    computerScore++;
    return `Computer win! ${computerSelection} beats ${playerSelection}`;
}
}
let disableButtons = (disable) => {
  rock.disabled = disable;
  paper.disabled = disable;
  scissors.disabled = disable;
};

let updateGame = (playerSelection) => {
    if(playerScore == 5 || computerScore == 5) return;
    let computerSelection = computerChoice();
    let result = playRound(playerSelection, computerSelection);


results.textContent = result;
score.textContent =
    `Player: ${playerScore} - Computer: ${computerScore}`;


if (playerScore == 5) {
    results.textContent = "Congrats! You are the winner";
    disableButtons(true);
}
if (computerScore == 5){
    results.textContent = "Oops! you lose, Computer is the winner";
    disableButtons(true);
}
}

rock.addEventListener("click", () => updateGame("rock"));
paper.addEventListener("click", () => updateGame("paper"));
scissors.addEventListener("click", () => updateGame("scissors"));
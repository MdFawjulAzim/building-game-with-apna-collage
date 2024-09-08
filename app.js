let userScore = 0;
let compScore = 0;
//first access
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//3rd Function
const genComprChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText ="Game Was Draw!Play Again!";
    msg.style.backgroundColor =" #081b31";
}
//5th Function
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText =userScore;
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}!`;
        msg.style.backgroundColor ="green";
    } else {
        compScore++;
        userScorePara.innerText =compScore;
        msg.innerText =`You Lose! ${compChoice} beats your ${userChoice}!`;
        msg.style.backgroundColor ="red";
    }
}
//2nd Function,//4th Function
const playGame = (userChoice) => {
    // Generate Computer choice.....
    const compChoice = genComprChoice();
    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


//1st Function
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

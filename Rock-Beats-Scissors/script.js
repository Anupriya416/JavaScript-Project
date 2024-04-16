let userScore = 0; //user ka score track karne keliye
let compScore = 0; //computer ka score track karne ke liye

//sare choice ko access karege
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock, paper, scissors kiss ek ke liye generate karega
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice = "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


// har ek div ke upar ek eventlistener ko add karne wale hai jo hamare click event ko track karegi

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    });
});

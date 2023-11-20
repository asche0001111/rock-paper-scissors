function compInput() {
    return Math.ceil(Math.random() * 3);
    //1 is rock, 2 is paper, 3 is scissors
}

document.addEventListener('DOMContentLoaded', function() {
    let userScore =  0;
    let compScore = 0;


    const userScoreDisplay = document.getElementById('userScore');
    const compScoreDisplay = document.getElementById('compScore');


    function updateScores() {
        userScoreDisplay.textContent = `USER: ${userScore}`
        compScoreDisplay.textContent = `COMP: ${compScore}`
    }

    function reset() {
        userScore = 0;
        compScore = 0;
        buttons.style.display = 'flex';
        gameOver.style.display = 'none';
        updateScores();
    }

    function playRound(playerChoice) {
        let compChoice = compInput();
    //let playerChoice = getPlayerInput();
        console.log(`You choose ${playerChoice}.`);

        if (compChoice === 1) {
            console.log(`Computer chooses rock.`);
        } else if (compChoice === 2) {
            console.log(`Computer chooses paper.`);
        } else if (compChoice === 3) {
        console.log(`Computer chooses scissors.`);
        }

        if ((playerChoice === "rock" && compChoice === 1) || (playerChoice === "paper" && compChoice === 2) || (playerChoice === "scissors" && compChoice === 3)) {
            console.log("Draw!");
        } else if ((playerChoice === "rock" && compChoice === 2) || (playerChoice === "paper" && compChoice === 3) || (playerChoice === "scissors" && compChoice === 1)) {
            console.log("You lose this round!");
            compScore += 1;
            updateScores();
            scoreCheck();
        } else {
            console.log("You win this round!");
            userScore += 1;
            updateScores();
            scoreCheck();
        }
    }


    const rock = document.querySelector('#rock');
    rock.addEventListener('click', chooseRock);

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', choosePaper);

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', chooseScissors);



    function chooseRock() {
        console.log('You choose rock');
        playRound('rock');
    };

    function choosePaper() {
        console.log('You choose paper');
        playRound('paper');
    };

    function chooseScissors() {
        console.log('You choose scissors');
        playRound('scissors')
    };

    const gameOver = document.getElementById('gameOver');
    const gameOverText = document.getElementById('gameOverText')

    const buttons = document.getElementById('buttons');
    function scoreCheck() {
        if (userScore === 5) {
            buttons.style.display = 'none';
            gameOver.style.display = 'flex';
            gameOverText.textContent = 'YOU WON';
        } else if (compScore === 5) {
            buttons.style.display = 'none';
            gameOver.style.display = 'flex';
            gameOverText.textContent = 'YOU LOST';
        }
    }

    const playAgain = document.querySelector('#playAgain')
    playAgain.addEventListener('click', reset)


})


/*for (let i = 0; i < 5; i++) {
    console.log(`User: ${userScore} - Computer: ${compScore}`);
    playRound();
}

console.log("GAME OVER")
console.log(`FINAL SCORE: USER: ${userScore} - COMPUTER: ${compScore}`)
if (userScore > compScore) {
    console.log("YOU WIN")
} else if (userScore === compScore) {
    console.log("DRAW")
} else {
    console.log("YOU LOSE")
}
*/
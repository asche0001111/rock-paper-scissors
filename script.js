function compInput() {
    return Math.ceil(Math.random() * 3);
    //1 is rock, 2 is paper, 3 is scissors
}

document.addEventListener('DOMContentLoaded', function() {
    let userScore =  0;
    let compScore = 0;
    let compChoiceWord = ''

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
        roundEnd.style.display = 'block';
        roundEnd.textContent = ''
        picked.textContent = ''
        updateScores();
    }



    function playRound(playerChoice) {
        let compChoice = compInput();
    //let playerChoice = getPlayerInput();
        console.log(`You choose ${playerChoice}.`);

        if (compChoice === 1) {
            console.log(`Computer chooses rock.`);
            compChoiceWord = 'rock';
        } else if (compChoice === 2) {
            console.log(`Computer chooses paper.`);
            compChoiceWord = 'paper';
        } else if (compChoice === 3) {
            console.log(`Computer chooses scissors.`);
            compChoiceWord = 'scissors';
        }

        function roundOver() {
            picked.textContent = `You choose ${playerChoice}, computer chooses ${compChoiceWord}`
        }
        function roundDraw() {
            roundEnd.textContent = "Draw!";
        }
        function roundLost() {
            roundEnd.textContent = `You lose this round!`;
        }
        function roundWon() {
            roundEnd.textContent = "You win this round!";
        }

        if ((playerChoice === "rock" && compChoice === 1) || (playerChoice === "paper" && compChoice === 2) || (playerChoice === "scissors" && compChoice === 3)) {
            roundDraw();
            roundOver();
        } else if ((playerChoice === "rock" && compChoice === 2) || (playerChoice === "paper" && compChoice === 3) || (playerChoice === "scissors" && compChoice === 1)) {
            roundLost();
            compScore += 1;
            updateScores();
            scoreCheck();
            roundOver();
        } else {
            roundWon();
            userScore += 1;
            updateScores();
            scoreCheck();
            roundOver();
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

    const buttons = document.querySelector('.buttons');
    function scoreCheck() {
        if (userScore === 5) {
            buttons.style.display = 'none';
            roundEnd.style.display = 'none';
            gameOver.style.display = 'flex';
            gameOverText.textContent = 'YOU WON';
        } else if (compScore === 5) {
            roundEnd.style.display = 'none';
            buttons.style.display = 'none';
            gameOver.style.display = 'flex';
            gameOverText.textContent = 'YOU LOST';
        }
    }

    const playAgain = document.querySelector('#playAgain')
    playAgain.addEventListener('click', reset)

    const picked = document.querySelector('#picked')
    const roundEnd = document.querySelector('#roundEnd')

})


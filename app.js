//ALL CONSTANTS USED THROUGHOUT GAME
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const ERROR = "Error!";


//QUERYSELECTORS
const instructions = document.querySelector('#instructions');
const beginGame = document.querySelector('.begin-game');
const rockbtn = document.querySelector('.rock-btn');
const paperbtn = document.querySelector('.paper-btn');
const scissorsbtn = document.querySelector('.scissors-btn');
const selection = document.querySelector('.selection-container');
const showComp = document.querySelector('#comp-selection')

const roundWinner = document.querySelector('.round-winner-text');
const displayScores = document.querySelector('.display-scores');
const scores = document.querySelector('.scores');
const compScoreDisplay = document.querySelector('.comp-score-container');
const playerScoreDisplay = document.querySelector('.player-score-container');

const compBestScore = document.querySelector('.compBestScore');
const playerBestScore = document.querySelector('.playerBestScore');

const gameWinner = document.querySelector('#winner');
const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');
const playAgain = document.querySelector('.play-again-container');
const playAgainBtn = document.querySelector('.play-again');
const bestOf = document.querySelector('.bestOf');


//computer and player counts, starting at zero
let computerCount = 0;
let playerCount = 0;

let computerWinCount = 0;
let playerWinCount = 0;


//check if visibility is not already removed 
//if not, return 
//if so, run displayGame()
function checkVis () {
	// if (!selection.classList.contains('vis') || !displayScores.classList.contains('vis')) {
	// 	return;
	// } else {
	// 	displayGame();
	// }

	if (!selection.classList.contains('disp-none') || !displayScores.classList.contains('disp-none')) {
		return;
	} else {
		displayGame();
	}
}

//event listener for button to start game ---> 
beginGame.addEventListener('click', checkVis);

//append scores to displayscore div 
const displayCount = () => {
	computerScore.textContent = computerCount;
	playerScore.textContent = playerCount;

	compScoreDisplay.appendChild(computerScore);
	playerScoreDisplay.appendChild(playerScore);
}

//when begin game button is clicked, display buttons and scores 
function displayGame (e) {
	instructions.classList.add('disp-none');
	beginGame.classList.add('disp-none');
	displayCount();
	// selection.classList.remove('vis');
	// displayScores.classList.remove('vis');
	selection.classList.remove('disp-none');
	displayScores.classList.remove('disp-none');


}





let bestClicked = false;
let clicked = false;
let playAgainClicked = false;


//once game starts and player makes selection, then run this function and return result to comp selection DOM 
//function to randomize computer selection
let computerPlay = () => {
	const min = 1;
	const max = 4;
	let r = Math.floor(Math.random() * (max - min) + min);
	switch (r) {
		case 1:
		r = ROCK;
			break;
			case 2:
		r = PAPER;
			break;
			case 3:
		r = SCISSORS;
			break;
			default:
		console.log("OOPS. Something went wrong");
	}
	// console.log(`Computer chooses: ${r}`);
	return r;
};



// selection.style.color = "rgba(54, 124, 255, 0.8)";

rockbtn.addEventListener('click', () => {
	clicked = true;
	let selection = computerPlay(); //returning r from randomized function 
	showComp.textContent = `Computer chooses: ${selection}`;
	if (selection == SCISSORS) {
		roundWinner.textContent = `+1 You Won! Rock smashes Scissors`;
		playerScore.textContent = playerCount += 1;
	} else if (selection == PAPER) {
		roundWinner.textContent = `-1 You Lost. Paper covers Rock`;
		computerScore.textContent = computerCount += 1;
	} else {
		roundWinner.textContent = `You tied!`;
	}
	// console.log(computerCount, playerCount);
	checkIfOver(computerCount, playerCount);
})
paperbtn.addEventListener('click', () => {
	clicked = true;
	let selection = computerPlay();
	showComp.textContent = `Computer chose: ${selection}`;
	if (selection == ROCK) {
		playerScore.textContent = playerCount += 1;
		roundWinner.textContent = `+1 You Won! Paper covers Rock`;
	} else if (selection == SCISSORS) {
		computerScore.textContent = computerCount += 1;
		roundWinner.textContent = `-1 You Lost. Scissors cuts Paper`;
	} else {
		roundWinner.textContent = `You tied!`;
	}
	checkIfOver(computerCount, playerCount);
})
scissorsbtn.addEventListener('click', () => {
	clicked = true;
	let selection = computerPlay();
	showComp.textContent = `Computer chose: ${selection}`;
		if (selection == PAPER) {
		playerScore.textContent = playerCount += 1;
		roundWinner.textContent = `+1 You Won! Scissors cuts Paper`;
	} else if (selection == ROCK) {
		computerScore.textContent = computerCount += 1;
		roundWinner.textContent = `-1 You Lost. Rock smashes Scissors`;
	} else {
		roundWinner.textContent = `You tied!`;
	}
	checkIfOver(computerCount, playerCount);
})

function checkIfOver (comp, player) {
	if (comp == 5 || player == 5) {
		console.log("test");
		declareWinner(computerCount, playerCount);
	} else {
		return;
	}
}

//function to check who got to 5 first, and display winner
function declareWinner (comp, player) {
	if (comp > player) {
		gameWinner.textContent = `Machines are taking over the world. Uh Oh.`;
		if (bestClicked == true) {
			computerWinCount++;
			// compBestScore.classList.remove('vis');
			compBestScore.classList.remove('disp-none');
			compBestScore.textContent = `The Machine is leading the race: ${computerWinCount} wins`;
			compScoreDisplay.appendChild(compBestScore);
		}
	} else {
		gameWinner.textContent = `You beat the Machine. Congrats.`;
		if (bestClicked == true) {
			playerWinCount++;
			// playerBestScore.classList.remove('vis');
			playerBestScore.classList.remove('disp-none');
			playerBestScore.textContent = `You are winning the race: ${playerWinCount} wins`;
			playerScoreDisplay.appendChild(playerBestScore);
		}
	}
	// if (computerWinCount == 3)
	playAgainFunc();
}




//once game ends, winner is declared, 
function playAgainFunc () {
	// selection.classList.add('vis');
	// displayScores.classList.add('vis');
	// beginGame.classList.add('vis');
	selection.classList.add('disp-none');
	displayScores.classList.add('disp-none');
	beginGame.classList.add('disp-none');
	instructions.classList.add('disp-none');
	// if (bestClicked = false && computerWinCount == 0 && playerWinCount == 0) {
	// 	playAgain.classList.remove('vis');
	// }
	playAgain.classList.remove('disp-none');

}
//click best of 3 button 
	bestOf.addEventListener('click', () => {
		bestClicked = true;
		declareWinner();
		resetGame();
		checkVis();
		playAgain.classList.add('disp-none');
	})
//click play again button
	playAgainBtn.addEventListener('click', () => {
		playAgainClicked = true;
		resetGame();
		checkVis();
		playAgain.classList.add('disp-none');
	})

function resetGame() {
	computerCount = 0;
	playerCount = 0;
	bestClicked = false;
	displayCount();
	roundWinner.textContent = '';
	showComp.textContent = '';
	gameWinner.textContent = '';
}
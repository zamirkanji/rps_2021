//ALL CONSTANTS USED THROUGHOUT GAME
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const ERROR = "Error!";


//QUERYSELECTORS
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

const gameWinner = document.querySelector('#winner');


const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');
const playAgain = document.querySelector('.play-again-container');
const playAgainBtn = document.querySelector('.play-again');


//computer and player counts, starting at zero
let computerCount = 0;
let playerCount = 0;


//check if visibility is not already removed 
//if not, return 
//if so, run displayGame()
function checkVis () {
	if (!selection.classList.contains('vis') || !displayScores.classList.contains('vis')) {
		return;
	} else {
		displayGame();
		//displayGame will not work
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
	displayCount();
	selection.classList.remove('vis');
	displayScores.classList.remove('vis')

	//starts game ---> run startGame()
	startGame();
}

let clicked = false;
// computerScore.textContent = '';
// playerScore.textContent = '';

const startGame = (e) => {
	console.log(e);
	rockbtn.addEventListener('click', () => {
		clicked = true;
		let selection = computerPlay(); //returning r from randomized function 
		// console.log(selection);
		showComp.textContent = `Computer chooses: ${selection}`;
		if (selection == SCISSORS) {
			roundWinner.textContent = `+1 Rock smashes Scissors`;
			playerScore.textContent = playerCount += 1;
		} else if (selection == PAPER) {
			roundWinner.textContent = `-1 Paper covers Rock`;
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
		// console.log(selection);
		showComp.textContent = `Computer chose: ${selection}`;
		if (selection == ROCK) {
			playerScore.textContent = playerCount += 1;
			roundWinner.textContent = `+1 Paper covers Rock`;
		} else if (selection == SCISSORS) {
			computerScore.textContent = computerCount += 1;
			roundWinner.textContent = `-1 Scissors cuts Paper`;
		} else {
			roundWinner.textContent = `You tied!`;
		}
		checkIfOver(computerCount, playerCount);
	})
	scissorsbtn.addEventListener('click', () => {
		clicked = true;
		let selection = computerPlay();
		// console.log(selection);
		showComp.textContent = `Computer chose: ${selection}`;
		if (selection == PAPER) {
			playerScore.textContent = playerCount += 1;
			roundWinner.textContent = `+1 Scissors cuts Paper`;
		} else if (selection == ROCK) {
			computerScore.textContent = computerCount += 1;
			roundWinner.textContent = `-1 Rock smashes Scissors`;
		} else {
			roundWinner.textContent = `You tied!`;
		}
		checkIfOver(computerCount, playerCount);
	})

	
	
}

function checkIfOver (comp, player) {
	if (comp == 5 || player == 5) {
		console.log("test");
		declareWinner(computerCount, playerCount);
	} else {
		return;
	}
}
function declareWinner (comp, player) {
	console.log(comp, player + "test");
	if (comp > player) {
		gameWinner.textContent = `Machines are taking over the world. Uh Oh.`;
	} else {
		gameWinner.textContent = `You beat the Machine. Congrats.`;
	}

	playAgainFunc();
}

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

//once game ends, winner is declared, 
function playAgainFunc () {
	selection.classList.add('vis');
	displayScores.classList.add('vis')
	playAgain.classList.remove('vis');

	playAgainBtn.addEventListener('click', () => {
		resetGame();
		checkVis();
	})
}

function resetGame() {
	computerCount = 0;
	playerCount = 0;
	displayCount();
	roundWinner.textContent = '';
	showComp.textContent = '';
	gameWinner.textContent = '';
}
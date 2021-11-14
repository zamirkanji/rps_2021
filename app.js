const beginGame = document.querySelector('.begin-game');
const rockbtn = document.querySelector('.rock-btn');
const paperbtn = document.querySelector('.paper-btn');
const scissorsbtn = document.querySelector('.scissors-btn');
const selection = document.querySelector('.selection-container');

const showComp = document.querySelector('#comp-selection')

const displayScores = document.querySelector('.display-scores');
const scores = document.querySelector('.scores');

const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');
const playAgain = document.querySelector('.play-again-container');

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const ERROR = "Error!";

//computer and player counts, starting at zero
let computerCount = 0;
let playerCount = 0;

beginGame.addEventListener('click', displayGame);

//when clicked, check if scores are already displayed, if so, return and exit out of function before running 

// beginGame.addEventListener('click', (e) => {
// 	if (e.classList.contains('computer-score')) {
// 		return;
// 	} else {
// 		displayScores
// 	}
// })

//append scores to displayscore div 
const displayCount = () => {
	

	computerScore.textContent = computerCount;
	playerScore.textContent = playerCount;
	scores.appendChild(computerScore);
	scores.appendChild(playerScore);
}


//when begin game button is clicked, display buttons and scores 
function displayGame (e) {
	displayCount();
	console.log(e);
	selection.classList.remove('vis');
	displayScores.classList.remove('vis')

	startGame();
}

//once game ends, winner is declared, 
function playAgainBtn () {
	playAgain.classList.remove('vis');
}

// computerScore.textContent = '';
// playerScore.textContent = '';

const startGame = () => {
	rockbtn.addEventListener('click', () => {
		let selection = computerPlay();
		// console.log(selection);
		showComp.textContent = `Computer chose: ${selection}`;
		if (selection == SCISSORS) {
			playerScore.textContent = ++playerCount;
		} else if (selection == PAPER) {
			computerScore.textContent = ++computerCount;
		} else {
			
		}
	})
	paperbtn.addEventListener('click', () => {
		let selection = computerPlay();
		// console.log(selection);
		showComp.textContent = `Computer chose: ${selection}`;
		if (selection == SCISSORS) {
			playerScore.textContent = ++playerCount;
		} else if (selection == PAPER) {
			computerScore.textContent = ++computerCount;
		} else {

		}
	})
	scissorsbtn.addEventListener('click', () => {
		let selection = computerPlay();
		// console.log(selection);
		showComp.textContent = `Computer chose: ${selection}`;
		if (selection == SCISSORS) {
			playerScore.textContent = ++playerCount;
		} else if (selection == PAPER) {
			computerScore.textContent = ++computerCount;
		} else {

		}
	})
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
	console.log(`Computer chooses: ${r}`);
	return r;
};


//function takes in player and computers input and returns winner of each round. incrementing count of winner
function playRound (comp, player) {
	// comp;
	// player;

	//check if inputs are tied
	if (comp == player) {
		return "You Tied!";
	}
	//if not, check if player has paper
	else if (player == PAPER) {
		if (comp == ROCK) {
			console.log("You Win!");
			playerCount++;
		} else {
			console.log("You lost!");
			computerCount++;
		}	
	} 
	//check if player has rock
	else if (player == ROCK) {
		if (comp == PAPER) {
			console.log("You lost!");
			computerCount++;
		} else {
			console.log("You win!");
			playerCount++;
		}
	} 
	//check if player has scissors
	else if (player == SCISSORS) {
		if (comp == PAPER){
			console.log("You won!");
			playerCount++;
		} else {
			console.log("You lost!");
			computerCount++;
		}
	} else {
		return ERROR;
	}
	return `player score: ${playerCount}, computer score: ${computerCount}, `;
};

// let comp = computerPlay();
// console.log(`computer selection log: ${comp}`);
// let player = playerSelection();
// console.log(`player selection log: ${player}`);
// let round = playRound(comp, player);
// console.log(round);
                                                                                                                                                                                                                                                                                                                                                                                    

// function game (playRound){
// 	for (let i = 0; i < 5; i++) {
// 		console.log(playRound);
// 		let result = playRound;
// 		console.log(playerCount, computerCount, result, i);
// 		//not properly calling function - not asking for input everytime
// 	}
// }

	// return result
// console.log(playerCount, computerCount);
// console.log(`game results test: ${game(round)}`);
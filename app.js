const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const ERROR = "Error!";

//computer and player counts, starting at zero
let computerCount = 0;
let playerCount = 0;

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

//function that takes in players input and returns it
let playerSelection = () => {
	const initialInput = prompt("What selection do you choose?").trim();
	let playerInput = initialInput.charAt(0).toUpperCase() + initialInput.slice(1);
	// console.log(playerInput);
	if (playerInput == ROCK) {
		playerInput = ROCK;
	} else if (playerInput == PAPER) {
		playerInput = PAPER;
	} else if (playerInput == SCISSORS) {
		playerInput = SCISSORS;
	} else {
		console.log("ERROR. Not an Input");
	}
	console.log(`Player chooses: ${playerInput}`);
	return playerInput;
};

//function takes in player and computers input and returns winner of each round. incrementing count of winner
let playRound = (comp, player) => {
	if (player === comp) {
		console.log("Tied!");
	} else if (player === PAPER && comp === ROCK) {
		playerCount++;
		return `You Won! Paper beats Rock! Player Score: ${playerCount}, Computer Score: ${computerCount}`;
	} else if (player === ROCK && comp === SCISSORS) {
		playerCount++;
		return `You Won! Rock beats Scissors! Player Score: ${playerCount}, Computer Score: ${computerCount}`;
	} else if (player === SCISSORS && comp === PAPER) {
		playerCount++;
		return `You Won! Scissors beats Paper! Player Score: ${playerCount}, Computer Score: ${computerCount}`;
	} else if (player === PAPER && comp === SCISSORS) {
		computerCount++;
		return `You lost! Paper gets cut! Player Score: ${playerCount}, Computer Score: ${computerCount}`;
	} else if (player === ROCK && comp === PAPER) {
		computerCount++;
		return `You lost! Rock gets covered! Player Score: ${playerCount}, Computer Score: ${computerCount}`;
	} else if (player === SCISSORS && comp === ROCK) {
		computerCount++;
		return `You lost! Scissors gets smashed! Player Score: ${playerCount}, Computer Score: ${computerCount}`;
	} else {
		return ERROR;
	}
	console.log(`Computer Score: ${computerCount}, Player Score: ${playerCount}`);
};

let comp = computerPlay();
let player = playerSelection();


let game = (playRound) => {
	let result = playRound(computerPlay(), playerSelection());
	console.log(result);
	// console.log(`This is the result ${result}`);
	// console.log(computerCount, playerCount);
};

console.log(game(playRound));

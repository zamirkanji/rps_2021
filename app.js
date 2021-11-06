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
function playRound (comp, player) {
	comp;
	player;
	if (comp == player) {
		return "You Tied!";
	} else if (player == PAPER) {
		if (comp == ROCK) {
			console.log("You Win!");
			playerCount++;
		} else {
			console.log("You lost!");
			computerCount++;
		}	
	} else if (player == ROCK) {
		if (comp == PAPER) {
			console.log("You lost!");
			computerCount++;
		} else {
			console.log("You win!");
			playerCount++;
		}
	} else if (player == SCISSORS) {
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
	return `computer score: ${computerCount}, player score: ${playerCount}`;
};

let comp = computerPlay();
let player = playerSelection();
let round = playRound(comp, player);
console.log(round);
console.log(round);
                                                                                                                                                                                                                                                                                                                                                                                    

// let game = (playRound) => {
// 	let result = playRound(computerPlay(), playerSelection());
// 	console.log(result);
// 	// console.log(`This is the result ${result}`);
// 	// console.log(computerCount, playerCount);
// };

// console.log(game(round));
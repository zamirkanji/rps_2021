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

//function that takes in players input value and returns it
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

let comp = computerPlay();
console.log(`computer selection log: ${comp}`);
let player = playerSelection();
console.log(`player selection log: ${player}`);
let round = playRound(comp, player);
// console.log(round);
                                                                                                                                                                                                                                                                                                                                                                                    

function game (playRound){
	for (let i = 0; i < 5; i++) {
		console.log(playRound);
		let result = playRound;
		console.log(playerCount, computerCount, result, i);
		//not properly calling function - not asking for input everytime
	}
}

	// return result
// console.log(playerCount, computerCount);
console.log(`game results test: ${game(round)}`);
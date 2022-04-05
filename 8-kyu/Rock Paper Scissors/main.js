// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

const rps = (p1, p2) => {
	switch (true) {
		case p1 == 'rock' && p2 == 'scissors':
			return 'Player 1 won!';
			break;
		case p1 == 'scissors' && p2 == 'paper':
			return 'Player 1 won!';
			break;
		case p1 == 'paper' && p2 == 'rock':
			return 'Player 1 won!';
			break;
		case p2 == 'rock' && p1 == 'scissors':
			return 'Player 2 won!';
			break;
		case p2 == 'scissors' && p1 == 'paper':
			return 'Player 2 won!';
			break;
		case p2 == 'paper' && p1 == 'rock':
			return 'Player 2 won!';
			break;
		default:
			return 'Draw!'
	}
};

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

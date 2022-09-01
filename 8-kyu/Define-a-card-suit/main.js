// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  if (card.includes('♠')) {
		return 'spades'
	} else if (card.includes('♣')) {
		return 'clubs'
	} else if (card.includes('♦')) {
		return 'diamonds'
	} else {
		return 'hearts'
	}
}

console.log(defineSuit('Q♠'), 'spades');
console.log(defineSuit('9♦'), 'diamonds');
console.log(defineSuit('J♥'), 'hearts');

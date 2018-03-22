

let suits =[ 'Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values =['Ace', 'King', 'Queen', 'Jack', 'Ten', 
	'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 
	'Three', 'Two'];


function createDeck() {
	let deck = [];
	for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++) {
		for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
			let card = {
				suit: suits[suitsIdx],
				value: values[valuesIdx]
			}
			deck.push(card);
		}
	}
	return deck;
}	

function getCardString(card) {
	return card.value + ' of ' + card.suit;
}
function getNextCard() {
	return deck.shift();
}
let deck = createDeck();


let playerCards = [getNextCard(), getNextCard()];

console.log('Welcome to Blackjack');
console.log('You are dealt: ');
console.log(' ' + getCardString(playerCards[0]));
console.log(' ' + getCardString(playerCards[1]));
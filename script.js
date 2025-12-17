const shuffleButton = document.getElementById("shuffleDeckButton");
const drawButton = document.getElementById("drawCardButton");
const resetButton = document.getElementById("resetButton");

const cardLabel = document.getElementById("drawnCard");

let card = "draw a card";
var deck;

shuffleButton.onclick = function(){
    deck = shuffle(deck.cards);
    return deck;
}

drawButton.onclick = function(){
    card = draw(deck.cards);
}

resetButton.onclick = function(){
    deck = new Deck();
    card = "draw a card";
    console.log("opened a fresh pack of cards");
    //console.log(deck.cards);
}

class Deck {
    cards = [];
    suits = [
        "Hearts",
        "Diamonds",
        "Clubs",
        "Spades"
    ];
    numbers = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"];
    //include jokers for Savage Worlds utility
    jokers = ["Red", "Black"];

    constructor(){
       this.createDeck()
    }

    createDeck(){
        for (var suit of this.suits){
            for (var number of this.numbers){
                var card = `${number} of ${suit}`
                this.cards.push(card);
            }
        }
        for (var joker of this.jokers){
            var joker = `${joker} Joker`
            this.cards.push(joker);
        }
    }
    
}

function shuffle (cards){
        for (let i = cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random()*(i+1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        console.log("shuffled the deck");
        //console.log(deck.cards);
        return deck;
    }

function draw (deck){
    let card = deck.pop();
    console.log(`drew a ${card}`);
    //console.log(deck);
}
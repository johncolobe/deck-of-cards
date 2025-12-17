const shuffleButton = document.getElementById("shuffleDeckButton");
const drawButton = document.getElementById("drawCardButton");
const resetButton = document.getElementById("resetButton");

const cardLabel = document.getElementById("drawnCard");

var card = "";
var deck;
var oldCards;
var combatants;

shuffleButton.onclick = function(){
    deck = deck.shuffle(deck.cards);
    //console.log(deck.cards);
    cardLabel.textContent = "draw a card";
}

drawButton.onclick = function(){
    card = deck.draw(deck.cards);
}

resetButton.onclick = function(){
    deck = new Deck();
    cardLabel.textContent= "shuffle me";
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

    shuffle (cards){
        for (let i = cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random()*(i+1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        console.log("shuffled the deck");
        return deck;
    }

    draw (deck){
        let card = deck.pop();
        console.log(`drew: ${card}`);
        //console.log(deck);
        cardLabel.textContent = card;
    }

    //take name and assign card for initiative tracker
    //to be implemented later
    assign(cards){
        if (!deck.cards) return;
    }
}
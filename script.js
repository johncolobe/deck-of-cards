//attaches html elements to variables
const shuffleButton = document.getElementById("shuffleDeckButton");
const drawButton = document.getElementById("drawCardButton");
const resetButton = document.getElementById("resetButton");

const cardLabel = document.getElementById("drawnCard");

const combatantInput = document.getElementById("combatantInput");

//got stuck with event bubbling error on this bit, accidentally had "combatantSubmit"
const combatantSubmitBtn = document.getElementById("combatantSubmitBtn");

//holds current card
let card;

//stores current deck
let deck = [];
//holds previously drawn cards from current deck
let oldCards = [];
//list of characters that cards will be assigned to
//NOT IMPLEMENTED YET
let combatants = [];


//---BUTTONS---//

drawButton.onclick = function(){
    //if loop?
    //if no card, draw card. else add old card to list, then draw card
    if (card) {
       deck.oldCards.push(card);
       listOldCards(card);
    }
    
    card = deck.draw(deck.cards);

    console.log(deck.oldCards);
}

shuffleButton.onclick = function(){
    deck.shuffle(deck.cards);
    //console.log(deck.cards);
    cardLabel.textContent = "draw a card";
}

resetButton.onclick = function(){
    //creates fresh ordered deck
    deck = new Deck();

    //pulled card is made empty
    card = null;

    //list of old cards is made empty
    oldCards = [];

    //erases listed cards from html list element
    let list = document.getElementById("drawnCardsList");
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }

    cardLabel.textContent= "shuffle me";
    console.log("opened a fresh pack of cards");
    //console.log(deck.cards);
}

//FIXIT clicking form adds name, change to only add with button click
//refactor: create combat list, have a button next to each name to draw card from deck

combatantSubmitBtn.onclick = function(){
    const name = combatantInput.value.trim();
    if (name) {
        listCombatants(name);
        combatantInput.value = '';
    }
};

//---FUNCTIONS---//

function listCombatants(name){
    let list = document.getElementById("listedCombatants");
    let li = document.createElement("li");
    li.textContent = name;
    list.prepend(li);
}

function listOldCards(cardText){
    let list = document.getElementById("drawnCardsList");
    let li = document.createElement("li")
    li.textContent = cardText;
    list.prepend(li);
}

//---CLASSES---//

class Deck {
    cards = [];
    oldCards = [];
    //reverse alphabetical order, for initiative
    suits = [
        "Spades",
        "Hearts",
        "Diamonds",
        "Clubs",
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
        return this;
    }

    draw (deck){
        let card = deck.pop();
        console.log(`drew: ${card}`);
        //console.log(deck);
        cardLabel.textContent = card;
        return card;
    }
    
}
    //TODO
    //take name and assign card for initiative tracker
    //to be implemented later
    function assign(cards){
        if (!deck.cards) return;
    }

    //TODO tracker for odds of drawing a joker each time
    function jokerOdds(){
        //fancy math
    }
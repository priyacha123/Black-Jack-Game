// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// console.log(sum);

let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false 
let message = "" 

let messageEl = document.getElementById("message-el")
const sumEl = document.querySelector("#sum-el")
const cardEl = document.querySelector("#card-el")
 
let player = {
    name : "Priya Kumari",
    chips : Math.floor(Math.random() * 500)
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13) + 1;
    if (randomNumber > 10) {
        randomNumber = 10;
    }
    else if(randomNumber === 1) {
        randomNumber = 11;
    }
    else {
        randomNumber = randomNumber;
    }

    return randomNumber;

}

function startGame() {
    isAlive = true; 
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame ();
}
function renderGame () {
    cardEl.textContent = `Cards : `
    for (let i = 0 ; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }  
    
    sumEl.innerHTML = `Sum : ${sum}`

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21) {
        message = "Congratulations! You have got Blackjack!"
        hasBlackJack = true;
        }
    else {
        message = "Sorry, you have lost. Better luck next time!"
        isAlive = false;
    }

    messageEl.textContent = message
    // console.log(message);
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    // console.log("Drawing a new card from the deck!");
    let card = getRandomCard() ;
    sum += card;
    cards.push(card)
    renderGame();
    }

}




// console.log(hasBlackJack);
// console.log(isAlive);






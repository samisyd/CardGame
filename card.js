 // Create player object
 let player = {
    name: "sami",
    chips: 200,
    sayhello: function() {
        console.log("Hi sam")
    }
 }
// player.sayhello()

let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let mesgEl = document.getElementById("msg-El")
let sumEl = document.querySelector("#sum-El")
let cardEl = document.getElementById("card-El")

//let playerEl = document.getElementById("player-el")

// if is its a class then u can do 
// let sumEl = document.querySelector(".sum-El")

//playerEl.textContent = player.name + ": $" + player.chips

/* Math.random will give vaue from 0.0- 0.999 
    *6 will give from 0 - 5.999
    floor - will remove the digits after decimal
*/
/* get from 1 - 13 */
function getRandomCard() {
    
    let randomnumber =  Math.floor(Math.random() * 13) + 1
    if (randomnumber === 1) {
        return 11
    } 
    else if (randomnumber > 10 ) {  
        return 10
    }
    else return randomnumber
}

function startGame() {

    cardEl.textContent = "Cards: " 
    sum = 0
    cards = []

    isAlive = true

    let firstCard = getRandomCard()
    let secondCard =  getRandomCard()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)
    renderGame()
}
function renderGame() {
    
    cardEl.textContent = "Cards: " 

    for(let i=0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    mesgEl.textContent = message
}

function newCard() {

    //console.log("Drawing a new card from the deck")

    if (isAlive === true || hasBlackJack === false) {
                
        let newcard = getRandomCard()
        
        sum += newcard
        cards.push(newcard)        
        renderGame()
    }
}
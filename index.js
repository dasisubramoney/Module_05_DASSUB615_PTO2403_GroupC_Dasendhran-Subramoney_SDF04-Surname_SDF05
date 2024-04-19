// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let bBlackjack = false
let message = ""
let isAlive = false
let aCards= []
let sum = 0
let messageOne = document.getElementById("message-One")
let sum1= document.getElementById("sum-one")
let cardsdrawn= document.getElementById("cards-drawn")
let playerOne = document.getElementById("player-one")
// Object Player
let player = {
    name: "Dasendhran",
    chips: 300
}

playerOne.textContent = player.name + ": $" + player.chips



function getrandomcard(){
    // generates random number from 1 to 13
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    
    // condition if the number is a ace, king, queen or jack card 
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
            return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    aCards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    // renders the content in a paragraph in html 
    cardsdrawn.textContent = "Cards: "
    // loop through array and display the numbers in the array 
    for (i = 0 ; i , i < aCards.length; i++){
        cardsdrawn.textContent += aCards[i] + " " 
    }
    // renders the sum of the first and second number
    sum1.textContent = "Sum: " + sum
    // Condition to check if you achieved blackjack 
    if (sum <= 20){
        message ="Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got blackJack"
        bBlackjack = true
    } else if (sum > 21) {
        message = "You are out of the game"
        isAlive = false
    }
    // render message on a paragraph in html 
    messageOne.textContent = message 
}

function newCard() {
    // Condition if isAlive and BBlackjack is false execute 
    if (isAlive === true && bBlackjack === false){
        let card = getrandomcard()
        sum += card
        // Push the card variable to the aCards array
        aCards.push(card)
        // Called the renderGame function
        renderGame()
    }


}

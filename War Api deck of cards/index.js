/**
 Challenge: Add a button that, when clicked, gets a new deck of cards from the deckofcards API
 
 URL: https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/
 
 Log the whole response to the console
 */
let deckId = ""
let playerCardTotal = 0
let dealerCardTotal = 0


fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
            console.log(deckId)
            
        })
const playerHand = document.getElementById('player-hand')
const dealerHand = document.getElementById('dealer-hand')

const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
 document.getElementById("new-deck").addEventListener("click", function() {
    
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data =>  {console.log(data.cards[0].image)
    playerHand.innerHTML = `<img src="${data.cards[0].image}"/>
    <img src="${data.cards[1].image}"/>`
    console.log(typeof data.cards[0].value)
    addPoints(data.cards[0].value, "player")
    addPoints(data.cards[1].value, "player")
    console.log(playerCardTotal)
    checkWinner()
})
fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(res => res.json())
    .then(data =>  {console.log(data.cards[0].image)
    dealerHand.innerHTML = `<img src="${data.cards[0].image}"/>`
    addPoints(data.cards[0].value, "dealer")
    console.log(dealerCardTotal)
    checkWinner()
})


})




//Hit Area

hitBtn.addEventListener('click', function() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(res => res.json())
    .then(data =>  {console.log(data.cards[0].image)
    playerHand.innerHTML += `<img src="${data.cards[0].image}"/>
    `
    addPoints(data.cards[0].value, "player")
    console.log(playerCardTotal)
    checkWinner()
})

})
// Stand Area
standBtn.addEventListener('click', async function() {

    while(dealerCardTotal < 16) {
    let res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let data = await res.json()
    console.log(data.cards[0].image)
    dealerHand.innerHTML += `<img src="${data.cards[0].image}"/>
    `
    addPoints(data.cards[0].value, "dealer")
    console.log(dealerCardTotal)
    
}
    
checkWinner2()
})


//Check Winner
function checkWinner() {
    if(playerCardTotal == 21) {
        console.log("Blackjack Player wins")
    } else if(dealerCardTotal > 21) {
        console.log("Player Wins")
    } else if(playerCardTotal > 21) {
        console.log("dealer Wins")
    }

}

function checkWinner2() {
    if(dealerCardTotal > playerCardTotal && dealerCardTotal < 21) {
        console.log("Dealer Wins")
    } else if( dealerCardTotal < playerCardTotal) {
        console.log("Player wins")
    } else if(playerCardTotal == dealerCardTotal) {
        console.log("Draw")
    } else if (dealerCardTotal > 21) {
        console.log("Player Wins")
    }
}




















//Add points
function addPoints(a, d) {
    if(a == 1 && d == "dealer") {
        dealerCardTotal += 1
    } else if (a == 2 && d == "dealer") {
        dealerCardTotal += 2
    } else if (a == 3 && d == "dealer") {
        dealerCardTotal += 3
    } else if (a == 4 && d == "dealer") {
        dealerCardTotal += 4
    } else if (a == 5 && d == "dealer") {
        dealerCardTotal += 5
    } else if (a == 6  && d == "dealer") {
        dealerCardTotal += 6
    } else if (a == 7 && d == "dealer") {
        dealerCardTotal += 7
    } else if (a == 8 && d == "dealer") {
        dealerCardTotal += 8
    } else if (a == 9 && d == "dealer") {
        dealerCardTotal += 9
    } else if (a == 10 && d == "dealer") {
        dealerCardTotal += 10
    } else if (a == "JACK" && d == "dealer") {
        dealerCardTotal += 10
    } else if (a == "QUEEN" && d == "dealer") {
        dealerCardTotal += 10
    } else if (a == "KING" && d == "dealer") {
        dealerCardTotal += 10
    } else if (a == "ACE" && d == "dealer") {
        dealerCardTotal += 11
    }  else if (a == 2 && d == "player") {
        playerCardTotal += 2
    } else if (a == 3 && d == "player") {
        playerCardTotal += 3
    } else if (a == 4 && d == "player") {
        playerCardTotal += 4
    } else if (a == 5 && d == "player") {
        playerCardTotal += 5
    } else if (a == 6  && d == "player") {
        playerCardTotal += 6
    } else if (a == 7 && d == "player") {
        playerCardTotal += 7
    } else if (a == 8 && d == "player") {
        playerCardTotal += 8
    } else if (a == 9 && d == "player") {
        playerCardTotal += 9
    } else if (a == 10 && d == "player") {
        playerCardTotal += 10
    } else if (a == "JACK" && d == "player") {
        playerCardTotal += 10
    } else if (a == "QUEEN" && d == "player") {
        playerCardTotal += 10
    } else if (a == "KING" && d == "player") {
        playerCardTotal += 10
    } else if (a == "ACE" && d == "player") {
        
            playerCardTotal += 11
        
    }
}
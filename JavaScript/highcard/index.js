let deckId
let player1Pts = 0
let player2Pts = 0
const player1 = document.getElementById("card-score-1")
const player2 = document.getElementById("card-score-2")
const player1Slot = document.getElementById("card-slot-1")
const player2Slot = document.getElementById("card-slot-2")
const player1Score = document.getElementById("player1-score")
const player2Score = document.getElementById("player2-score")
const result = document.getElementById("header")
const remainingCards = document.getElementById("remaining-cards")
const drawCardBtn = document.getElementById("drawCards")

document.getElementById("newDeck").addEventListener("click", NewDeck)
drawCardBtn.addEventListener("click", DrawCards)

function NewDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(response => response.json())
        .then(data => {
            deckId = data.deck_id
            remainingCards.textContent = `Remaining Cards: ${data.remaining}`
            resetGame()
        })
}

function DrawCards() {
    if (!deckId) {
        alert("Please get a new deck first")
        return
    }
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(response => response.json())
        .then(data => {
            let iteration = 1
            drawCardBtn.disabled = true
            remainingCards.textContent = `Remaining Cards: ${data.remaining}`
            const cards = data.cards.map(card => {
                let cards = `
                <label>${card.value} OF ${card.suit}</label>
                <br>
                <img src=${card.image} class="card-image"/>`
                document.getElementById(`card-slot-${iteration}`).innerHTML = cards
                document.getElementById(`card-slot-${iteration}`).style.backgroundColor = "darkred"
                document.getElementById(`card-slot-${iteration}`).style.borderColor = "gold"
                if (card.value === "QUEEN" && card.suit === "DIAMONDS") {
                    document.getElementById(`card-slot-${iteration}`).style.fontSize = "90%"
                }
                iteration++
            })
            const winnerText = cardWinner(data.cards[0], data.cards[1])
            result.textContent = winnerText
            if (data.remaining === 0) {
                drawCardBtn.disabled = true
                if (player1Pts > player2Pts) {
                    result.textContent = "And the winner is Player 1!"
                } else if (player1Pts < player2Pts) {
                    result.textContent = "And the winner is Player 2!"
                } else {
                    result.textContent = "The game ended in a draw!"
                }
            } else {
                drawCardBtn.disabled = false
            }
        })
}

function cardWinner(card1, card2) {
    const cardPower = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]

    const card1Value = cardPower.indexOf(card1.value)
    const card2Value = cardPower.indexOf(card2.value)

    if (card1Value > card2Value) {
        player1Pts++
        player1Score.textContent = `Player 1: ${player1Pts}`
        return "Player 1 Wins!"
    } else if (card1Value < card2Value) {
        player2Pts++
        player2Score.textContent = `Player 2: ${player2Pts}`
        return "Player 2 Wins!"
    } else {
        return "Draw!"
    }
}

function resetGame() {
    result.textContent = "High Card"
    drawCardBtn.disabled = false
    player1Pts = 0
    player2Pts = 0
    player1Slot.innerHTML = ""
    player1Slot.style.backgroundColor = "transparent"
    player1Slot.style.borderColor = "black"
    player2Slot.innerHTML = ""
    player2Slot.style.backgroundColor = "transparent"
    player2Slot.style.borderColor = "black"
    player1Score.textContent = `Player 1: ${player1Pts}`
    player2Score.textContent = `Player 2: ${player2Pts}`
}

let choices = ["Rock", "Paper", "Scissors"]
let compChoice = "Rock"


function play(playerChoice){
getCompChoice()
    if(playerChoice == "Rock"){
        if(compChoice == "Paper"){
            compWins()
        }else if(compChoice == "Scissors"){
            playerWins()
        }else if(compChoice == "Rock"){
            tie()
        }
    }
    if(playerChoice == "Paper"){
        if(compChoice == "Scissors"){
            compWins()
        }else if(compChoice == "Rock"){
            playerWins()
        }else if(compChoice == "Paper"){
            tie()
        }
    }
    if(playerChoice == "Scissors"){
        if(compChoice == "Rock"){
            compWins()
        }else if(compChoice == "Paper"){
            playerWins()
        }else if(compChoice == "Scissors"){
            tie()
        }
    }
function getCompChoice(){
    let index = Math.floor(Math.random() * choices.length)
    compChoice = choices[index]
}
function playerWins(){
    showPlayerChoice()
    showCompChoice()
    let resultWin = document.getElementById('display-result')
    resultWin.innerText = 'You won!'
} 

function compWins(){
    showPlayerChoice()
    showCompChoice()
    let resultLoss = document.getElementById('display-result')
    resultLoss.innerText = 'You lost!'
}
function tie(){
    showPlayerChoice()
    showCompChoice()
    let resultTie = document.getElementById('display-result')
    resultTie.innerText = 'Tie, go again!'
}
function showCompChoice(){
    let seeCompChoice = document.getElementById('display-comp-choice')
    seeCompChoice.innerText = compChoice
}
function showPlayerChoice(){
    let seePlayerChoice = document.getElementById('display-player-choice')
    seePlayerChoice.innerText = playerChoice
}
}
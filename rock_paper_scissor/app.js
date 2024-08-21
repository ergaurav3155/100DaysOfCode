const totalScore = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
  const rpschoices = ["Rock", "Paper", "Scissors"]
  const randomChoice = Math.floor(Math.random() *  rpschoices.length)
  return rpschoices[randomChoice]
}

function getResult(playerChoice, computerChoice) {
  let score = {playerScore:0, computerScore:0}
  if(playerChoice == computerChoice){
    score.playerScore = 0
    score.computerScore = 0
  }
  else if(playerChoice === 'Rock' && computerChoice === 'Scissors'){
    score.playerScore = 1
    score.computerScore = -1
  }
  else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
    score.playerScore = 1
    score.computerScore = -1
  }
  else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
    score.playerScore = 1
    score.computerScore = -1
  }
  else{
    score.playerScore = -1
    score.computerScore = 1
  }
  return score;
}

function showResult(score={playerScore:0, computerScore:0}, playerChoice, computerChoice) {
  const result = document.getElementById('result')
  const hands = document.getElementById('hands')
  const player_Score = document.getElementById('player-score')
  if(score.playerScore === -1){
    result.innerText = "You Lose!"
  }else if(score.playerScore === 0){
    result.innerText = "It's a tie!"
  }else if(score.playerScore === 1){
    result.innerText = "You Won!"
  }
  else{
    return null;
  }

  hands.innerText = `🧑‍🦱 ${playerChoice} VS 🤖 ${computerChoice}`

  player_Score.innerText = `Your result 👉 ${totalScore.playerScore} || Bot result 👉 ${totalScore.computerScore}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score.playerScore
  totalScore['computerScore'] += score.computerScore

  showResult(score, playerChoice, computerChoice)
}

function playGame() {
  const rpsButton = document.querySelectorAll('.rpsButton')

  rpsButton.forEach(rpsButton=>{
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  const endgameButton = document.getElementById('endGameButton')
  endgameButton.onclick = () => endGame(totalScore)

  const resetButton = document.getElementById('resetButton')
  resetButton.onclick = () => resetGame(totalScore)
}

function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const result = document.getElementById('result')
  const hands = document.getElementById('hands')
  const player_Score = document.getElementById('player-score')

  result.innerText = ''
  hands.innerText = ''
  player_Score.innerText = ''
}

function resetGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const result = document.getElementById('result')
  const hands = document.getElementById('hands')
  const player_Score = document.getElementById('player-score')

  result.innerText = ''
  hands.innerText = ''
  player_Score.innerText = ''
  showResetMessage()
}

function showResetMessage() {
  const resetMessage = document.getElementById('reset-message')
  resetMessage.innerText = 'Game reset! Play again!'
  setTimeout(() => {
    resetMessage.innerText = ''
  }, 2000)
}

playGame()

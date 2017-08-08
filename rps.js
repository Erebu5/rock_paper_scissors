var userInput = 'paper'
userInput = userInput.toLowerCase()


function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3)
  switch(randomNumber) {
  case 0:
    return 'paper'
  case 1:
    return 'rock'
  case 2:
    return 'scissors'
 }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is tied'
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins.'
    } else {
      return 'You win.'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins.'
    } else {
      return 'You win.'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins.'
    } else {
      return 'You win.'
    }
  }
  if (userChoice === 'bomb') {
    return 'You win.'
  }
}

function playGame() {
  var userChoice = userInput
  var computerChoice = getComputerChoice()
  console.log('You throw: ' + userChoice)
  console.log('Computer throws: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()

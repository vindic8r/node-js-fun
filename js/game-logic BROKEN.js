// All code should be written in this file.
// Declare all variables
let playerOneMoveOneType
let playerOneMoveOneValue
let playerOneMoveTwoType
let playerOneMoveTwoValue
let playerOneMoveThreeType
let playerOneMoveThreeValue
let playerTwoMoveOneType
let playerTwoMoveOneValue
let playerTwoMoveTwoType
let playerTwoMoveTwoValue
let playerTwoMoveThreeType
let playerTwoMoveThreeValue

const P1 = 'Player One'
const P2 = 'Player Two'
const TIE = 'Tie'
const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

// check for valid types
const validTypes = (t1, t2, t3) =>
  validType(t1) && validType(t2) && validType(t3)

// denote valid types
const validType = (type) => type === ROCK || type === PAPER || type === SCISSORS

// check for valid values
const validValues = (v1, v2, v3) =>
  v1 >= 1 && v2 >= 1 && v3 >= 1 && v1 + v2 + v3 <= 99

// set all of the players' moves for each round
function setPlayerMoves (player, m1t, m1v, m2t, m2v, m3t, m3v) {
// first check for missing inputs

  if (!m1t || !m1v || !m2v || !m2t || !m3v || !m3v) {
    return null
  }
  // check for valid validTypes
  if (!validTypes(m1t, m2t, m3t)) {
    return null
  }
  // check for valid values
  if (!validValues(m1v, m2v, m3v)) {
    return null
  }

  switch (player) {
    case P1:
      playerOneMoveOneType = m1t
      playerOneMoveOneValue = m1v
      playerOneMoveTwoType = m2t
      playerOneMoveTwoValue = m2v
      playerOneMoveThreeType = m3t
      playerOneMoveThreeValue = m3v
      break

    case P2:
      playerTwoMoveOneType = m1t
      playerTwoMoveOneValue = m1v
      playerTwoMoveTwoType = m2t
      playerTwoMoveTwoValue = m2v
      playerTwoMoveThreeType = m3t
      playerTwoMoveThreeValue = m3v
      break

    default:
      break
  }
}

// get the winner of each round - most of game logic lives here
function getRoundWinner (roundNumber) {
debugger;
//  if (!playerOneMoveOneType || !playerOneMoveOneValue ||
// !playerOneMoveTwoType || !playerOneMoveTwoValue ||
// !playerOneMoveThreeType || !playerOneMoveThreeValue ||
// !playerOneMoveOneType || !playerOneMoveOneValue ||
// !playerOneMoveTwoType || !playerOneMoveTwoValue ||
// !playerOneMoveThreeType || !playerOneMoveThreeValue) {
//     return null
  // get results of round 1
  if (roundNumber === 1) {
    if (!playerOneMoveOneType || !playerTwoMoveOneType ||
    !playerOneMoveOneValue || !playerTwoMoveOneValue) {
      if (playerOneMoveOneType === 'rock') {
        if (playerTwoMoveOneType === 'scissors') {
          return P1
        } else if (playerOneMoveOneType === playerTwoMoveOneType) {
          if (playerOneMoveOneValue > playerTwoMoveOneValue) {
            return P1
          } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
            return P2
          } else {
            return TIE
          }
        } else {
          return P2
        }
      }
      if (playerOneMoveOneType === 'paper') {
        if (playerTwoMoveOneType === 'rock') {
          return P1
        } else if (playerOneMoveOneType === playerTwoMoveOneType) {
          if (playerOneMoveOneValue > playerTwoMoveOneValue) {
            return P1
          } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
            return P2
          } else {
            return TIE
          }
        } else {
          return P2
        }
      }
      if (playerOneMoveOneType === 'scissors') {
        if (playerTwoMoveOneType === 'paper') {
          return P1
        } else if (playerOneMoveOneType === playerTwoMoveOneType) {
          if (playerOneMoveOneValue > playerTwoMoveOneValue) {
            return P1
          } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
            return P2
          } else {
            return TIE
          }
        } else {
          return P2
        }
      }
    }
    // get results for round 2
  } else if (roundNumber === 2) {
    // first check that there are no missing inputs
    if (!playerOneMoveTwoType || !playerTwoMoveTwoType ||
    !playerOneMoveTwoValue || !playerTwoMoveTwoValue) {
      // execute core game logic
      if (playerOneMoveTwoType === 'rock') {
        if (playerTwoMoveTwoType === 'scissors') {
          return P1
        } else if (playerOneMoveTwoType === playerTwoMoveTwoType) {
          if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
            return P1
          } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
            return P2
          } else {
            return TIE
          }
        }
      } else {
        return P2
      }
      if (playerOneMoveTwoType === 'paper') {
        if (playerTwoMoveTwoType === 'rock') {
          return P1
        } else if (playerOneMoveTwoType === playerTwoMoveTwoType) {
          if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
            return P1
          } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
            return P2
          } else {
            return TIE
          }
        }
      } else {
        return P2
      }
      if (playerOneMoveTwoType === 'scissors') {
        if (playerTwoMoveTwoType === 'paper') {
          return P1
        } else if (playerOneMoveTwoType === playerTwoMoveTwoType) {
          if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
            return P1
          } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
            return P2
          } else {
            return TIE
          }
        }
      } else {
        return P2
      }
    }
  // get results of round 3
  } else if (roundNumber === 3) {
    if (playerOneMoveThreeType === 'rock') {
      if (playerTwoMoveThreeType === 'scissors') {
        return P1
      } else if (playerOneMoveThreeType === playerTwoMoveThreeType) {
        if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return P1
        } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
          return P2
        } else {
          return TIE
        }
      }
    } else if (playerOneMoveThreeType === 'paper') {
      if (playerTwoMoveThreeType === 'rock') {
        return P1
      } else if (playerOneMoveThreeType === playerTwoMoveThreeType) {
        if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return P1
        } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
          return P2
        } else {
          return TIE
        }
      }
    } else if (playerOneMoveThreeType === 'scissors') {
      if (playerTwoMoveThreeType === 'paper') {
        return P1
      } else if (playerOneMoveThreeType === playerTwoMoveThreeType) {
        if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return P1
        } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
          return P2
        } else {
          return TIE
        }
      }
  } else {
    return null
  }
}

// add up the results of each round to get the overall winner
function getGameWinner (roundOneWinner, roundTwoWinner, roundThreeWinner) {
  let playerOneTally = 0
  let playerTwoTally = 0
  if (roundOneWinner === 'Player One') {
    playerOneTally += playerOneTally
  } else if (roundOneWinner === 'Player Two') {
    playerTwoTally += playerTwoTally
  }
  if (roundTwoWinner === 'Player One') {
    playerOneTally += playerOneTally
  } else if (roundTwoWinner === 'Player Two') {
    playerTwoTally += playerTwoTally
  }
  if (roundThreeWinner === 'Player One') {
    playerOneTally += playerOneTally
  } else if (roundThreeWinner === 'Player Two') {
    playerTwoTally += playerTwoTally
  }
  if (playerOneTally > playerTwoTally) {
    return 'Player One wins!'
  } else if (playerOneTally < playerTwoTally) {
    return 'Player Two wins!'
  } else {
    return 'It is a tie!'
  }
}

// setPlayerMoves('Player One', 'rock', 33, 'paper', 33, 'scissors', 33)
// setPlayerMoves('Player Two', 'scissors', 33, 'rock', 33, 'paper', 33)
// getGameWinner(getRoundWinner(1), getRoundWinner(2), getRoundWinner(3))

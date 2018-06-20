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
const TIED = 'Tie'
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
const getRoundWinner = round => {
  let Player1Type
  let Player1Value;
  let Player2Type;
  let Player2Value;

  switch (round) {
    case 1:
      Player1Type = playerOneMoveOneType;
      Player1Value = playerOneMoveOneValue;
      Player2Type = playerTwoMoveOneType;
      Player2Value = playerTwoMoveOneValue;
      break;

    case 2:
      Player1Type = playerOneMoveTwoType;
      Player1Value = playerOneMoveTwoValue;
      Player2Type = playerTwoMoveTwoType;
      Player2Value = playerTwoMoveTwoValue;
      break;

    case 3:
      Player1Type = playerOneMoveThreeType;
      Player1Value = playerOneMoveThreeValue;
      Player2Type = playerTwoMoveThreeType;
      Player2Value = playerTwoMoveThreeValue;
      break;

    default:
      return null;
  }
  return finishMoves(Player1Type, Player1Value, Player2Type, Player2Value);
};

const finishMoves = (Player1Type, Player1Value, Player2Type, Player2Value) => {

  if (!Player1Type || !Player1Value || !Player2Type || !Player2Value) {
    return null;
  }

  if (Player1Type === Player2Type) {
    if (Player1Value > Player2Value) {
      return P1;
    } else if (Player1Value < Player2Value) {
      return P2;
    } else {
      return TIED;
    }
  }

  switch (Player1Type) {
    case ROCK:
      return Player2Type === SCISSORS ? P1 : P2;
    case PAPER:
      return Player2Type === ROCK ? P1 : P2;
    case SCISSORS:
      return Player2Type === PAPER ? P1 : P2;
  }
};

// add up the results of each round to get the overall winner
const getGameWinner = () => {
  let winner1 = getRoundWinner(1);
  let winner2 = getRoundWinner(2);
  let winner3 = getRoundWinner(3);
  let Player1wins;
  let Player2wins;

  Player1wins = 0;
  Player2wins = 0;

  if (!winner1 || !winner2 || !winner3) {
    return null;
  }

  if (winner1 !== TIED) {
    winner1 === P1 ? Player1wins++ : Player2wins++;
  }
  if (winner2 !== TIED) {
    winner2 === P1 ? Player1wins++ : Player2wins++;
  }
  if (winner3 !== TIED) {
    winner3 === P1 ? Player1wins++ : Player2wins++;
  }

  if (Player1wins === Player2wins) {
    return TIED;
  }

  return Player1wins > Player2wins ? P1 : P2;
};

const setComputerMoves = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  let move1;
  let m1 = getRandomInt(0, 2);
  let move2;
  let m2 = getRandomInt(0, 2);
  let move3;
  let m3 = getRandomInt(0, 2);
  // get move values
  let value1 = getRandomInt(1, 99);
  let value2 = getRandomInt(1, (100 - value1));
  let value3 = 99 - value1 - value2;

  // get move types
  switch (m1) {
    case 0:
      move1 = ROCK
      break;
    case 1:
      move1 = PAPER
      break;
    case 2:
      move1 = SCISSORS
      break;
  }

  switch (m2) {
    case 0:
      move2 = ROCK
      break;
    case 1:
      move2 = PAPER
      break;
    case 2:
      move2 = SCISSORS
      break;
  }

  switch (m3) {
    case 0:
      move3 = ROCK
      break;
    case 1:
      move3 = PAPER
      break;
    case 2:
      move3 = SCISSORS
      break;
  }

  playerTwoMoveOneType = move1;
  playerTwoMoveOneValue = value1;
  playerTwoMoveTwoType = move2;
  playerTwoMoveTwoValue = value2;
  playerTwoMoveThreeType = move3;
  playerTwoMoveThreeValue = value3;
}

// setPlayerMoves('Player One', 'rock', 33, 'paper', 33, 'scissors', 33)
// setPlayerMoves('Player Two', 'scissors', 33, 'rock', 33, 'paper', 33)
// getGameWinner(getRoundWinner(1), getRoundWinner(2), getRoundWinner(3))

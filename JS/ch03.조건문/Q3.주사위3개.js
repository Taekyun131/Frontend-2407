//주사위 3개-백준도장 2480

let dice1 = Math.ceil(Math.random() * 6);
dice2 = Math.ceil(Math.random() * 6);
dice3 = Math.ceil(Math.random() * 6);
prize = 0;
if (dice1 == dice2 && dice1 == dice3) {
  prize = dice1 * 1000 + 10000;
} else if (dice1 == dice2 || dice1 == dice3) {
  prize = dice1 * 100 + 1000;
} else if (dice2 == dice3) {
  prize = dice2 * 100 + 1000;
} else {
  if (dice1 > dice2 && dice1 > dice3) {
    prize = dice1 * 100;
  } else if (dice2 > dice1 && dice2 > dice3) {
    prize = dice2 * 100;
  } else {
    prize = dice3 * 100;
  }
}
console.log(`(${dice1},${dice2},${dice3})`);
console.log(`상금은 ${prize}원 입니다.`);

//Refactoring

if (dice1 == dice2 && dice1 == dice3) {
  prize = dice1 * 1000 + 10000;
} else if (dice1 == dice2 || dice1 == dice3) {
  prize = dice1 * 100 + 1000;
} else if (dice2 == dice3) {
  prize = dice2 * 100 + 1000;
} else {
  let maxDice = dice1 > dice2 ? dice1 : dice2;
  maxDice = maxDice > dice3 ? maxDice : dice3;
  prize = 100 * maxDice;
}

if (dice1 == dice2 && dice1 == dice3) {
  prize = dice1 * 1000 + 10000;
} else if (dice1 == dice2 || dice1 == dice3) {
  prize = dice1 * 100 + 1000;
} else if (dice2 == dice3) {
  prize = dice2 * 100 + 1000;
} else {
  let maxDice = Math.max(dice1, dice2, dice3);
  prize = 100 * maxDice;
}

//주사위 3개-백준도장 2480

let dice1 = Math.ceil(Math.random() * 6);
dice2 = Math.ceil(Math.random() * 6);
dice3 = Math.ceil(Math.random() * 6);
price = 0;
if (dice1 == dice2 && dice1 == dice3) {
  price = dice1 * 1000 + 10000;
} else if (dice1 == dice2 || dice1 == dice3) {
  price = dice1 * 100 + 1000;
} else if (dice2 == dice3) {
  price = dice2 * 100 + 1000;
} else {
  if (dice1 > dice2 && dice1 > dice3) {
    price = dice1 * 100;
  } else if (dice2 > dice1 && dice2 > dice3) {
    price = dice2 * 100;
  } else {
    price = dice3 * 100;
  }
}
console.log(`(${dice1},${dice2},${dice3})`);
console.log(`상금은 ${price}원 입니다.`);

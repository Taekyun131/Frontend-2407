//while 반복문

let summerFruits = ["수박", "참외", "복숭아", "포도"];

let index = 0;
while (index < summerFruits.length) {
  console.log(summerFruits[index]);
  index++; //조건을 변화하는 실행문이 반드시 필요함.없으면 무한 루프
}

//주사위를 던진 합이 21을 초과할 때 loop 탈출하고 (loop 몇번 반복하는지 모름)
//그간 던진 주사위 눈을 출력

let sumDice = 0;
arrDice = [];
while (sumDice <= 21) {
  let dice = Math.ceil(Math.random() * 6);
  // console.log(dice);
  sumDice += dice;
  arrDice.push(dice);
}
console.log(arrDice);
console.log(sumDice);

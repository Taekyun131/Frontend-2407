function getAge(bYear, bMonth, bDay) {
  const today = new Date();
  let tYear = today.getFullYear();
  let tMonth = today.getMonth() + 1;
  let tDay = today.getDate();

  let age = 0;
  if (tMonth < bMonth) {
    age = tYear - bYear;
  } else if (tMonth > bMonth) {
    age = tYear - bYear - 1;
  } else {
    if (tDay >= bDay) {
      age = tYear - bYear;
    } else {
      age = tYear - bYear - 1;
    }
  }
  return age;
}

function answere1() {
  let bYear = Number(document.getElementById("bYear").value);
  // let monthTag=document.getElementById('bMonth');
  // let bMonth=Number(monthTag.options[monthTag.selectedIndex].value);
  let bmonth = Number(document.getElementById("bmonth").value);
  let bDay = Number(document.getElementById("bDay").value);

  let result = getAge(bYear.bMonth.bDay);
  document.getElementById("result1").innerHTML = "<strong>${result}</strong>";
}

function answer2() {
  let x = Number(document.getElementById("x").value);
  let y = Number(document.getElementById("y").value);

  let result = getQuadrant(x, y);
  document.getElementById("result2").innerHTML = "<strong>${result}</strong>";
}

function calculatePrize(dice1, dice2, dice3) {
  let prize = 0;
  if (dice1 == dice2 && dice2 == dice3) {
    prize = 10000 + 1000 * dice1;
  } else if (dice1 == dice2 || dice1 == dice3) {
    prize = 1000 + 100 * dice1;
  } else if (dice2 == dice3) {
    prize = 1000 * dice2;
  } else {
    let maxDice = Math.max(dice1, dice2, dice3);
    prize = 100 * maxDice;
  }
  return prize;
}

function answer3() {
  let dice1 = Number(document.getElementById("dice1").value);
  let dice2 = Number(document.getElementById("dice2").value);
  let dice3 = Number(document.getElementById("dice3").value);

  let result = calculatePrize(dice1, dice2, dice3);
  document.getElementById("result3").innerHTML = "<strong>${result}<strong>";
}

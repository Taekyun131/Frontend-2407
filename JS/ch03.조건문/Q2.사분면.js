//사분면 고르기-백준도장 1468
let x = Math.ceil(Math.random() * 20);
y = Math.ceil(Math.random() * 20);
x *= Math.random() > 0.5 ? 1 : -1;
y *= Math.random() > 0.5 ? 1 : -1;
Q = 0;

if (x > 0) {
  if (y > 0) {
    Q = 1;
  } else {
    Q = 4;
  }
} else {
  if (y > 0) {
    Q = 2;
  } else {
    Q = 3;
  }
}
console.log(`(${x},${y})`);
console.log(`(${x},${y})는 제${Q}사분면 입니다.`);

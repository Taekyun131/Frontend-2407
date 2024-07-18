//타이머 내장 함수
setTimeout(function () {
  console.log("3초 경과");
}, 3000); //(함수, ~ms 후 실행)

const si = setInterval(() => {
  console.log(new Date());
}, 1000); //(함수, ~ms 마다 실행)

setTimeout(() => {
  console.log("5초 경과 후 초시계 정지시킴");
  clearInterval(si);
}, 5100);

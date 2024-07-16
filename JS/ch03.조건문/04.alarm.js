//백준도장 - 2884 문제

const alarmHour = 0,
  alarmMin = 40;
let newHour = 0,
  newMin = 0;
if (alarmMin >= 45) {
  newHour = alarmHour;
  newMin = alarmMin - 45;
} else {
  //   if (alarmHour >= 1) {
  //     newHour = alarmHour - 1;
  //     newMin = alarmMin + 15;
  //   } else {
  //     newHour = alarmHour + 23;
  //     newMin = alarmMin + 15;
  //   }
  newHour = (24 + alarmHour - 1) % 24;
  newMin = 60 + alarm - 45;
}

console.log(`새로 설정한 알람 시간은 ${newHour}:${newMin}입니다.`);

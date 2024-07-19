//String 객체

let hello = "안녕하세요?";

// 속성
console.log(hello.length);

//메소드(method)
console.log(hello[2], hello.charAt(2)); //'하'
console.log(hello + "여러분!", hello.concat("여러분!"));
//문자열에 특정 문자열이 있는지 없는지 확인할 때 사용
console.log(hello.indexOf("세"), hello.indexOf("가")); //3, -1

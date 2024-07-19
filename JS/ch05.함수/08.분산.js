//배열원소 각각의 제곱의 합
function sumOfSquare(arr) {
  let sum = 0,
    square = 0;
  for (let num of arr) {
    square = num ** 2;
    sum += square;
  }
  return sum;
}

//배열원소의 합의 제곱
function sqareOfSum(arr) {
  let sum = 0,
    square = 0;
  for (let num of arr) {
    sum += num;
    square = sum ** 2;
  }
  return square;
}

let arr = [1, 2, 3, 4, 5];
console.log(sumOfSquare(arr), sqareOfSum(arr));

let variance =
  sumOfSquare(arr) / arr.length - sqareOfSum(arr) / arr.length ** 2;
console.log(variance);

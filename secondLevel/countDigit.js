// function countDigits(n) {
//   return n.toString().split("").length;
// }

function countDigits(n) {
  let count = 0;
  //when n is 0
  if (n === 0) {
    return 1;
  }
  //negative value to absolute
  let num = Math.abs(n);

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log(countDigits(-110));

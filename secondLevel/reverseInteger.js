var reverse = function(x) {
  let rev = 0;
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x = Math.abs(x);
  }
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return isNegative ? -rev : rev;
}
console.log(reverse(-123));

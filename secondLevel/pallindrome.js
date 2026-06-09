// function isPallindrome(n){
//     let num = n
//     let rev =''
//     while (num>0){
//        rev= rev+ num%10
//         num= Math.floor(num/10)

//     }
//     console.log(rev)
//     console.log(n)
//     return rev === n.toString()
// }
// console.log(isPallindrome(121))

function isPallindrome(n) {
    if(n<0) return false
  let num = n;
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10); 
  }
  return rev === n;
}
console.log(isPallindrome(121));

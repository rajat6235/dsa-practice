
var reverseString = function(s) {
  let len = s.length 
  let halfLen =Math.floor(len /2)
  for(let i = 0 ; i<halfLen; i++){
    [s[i],s[len-1-i]] = [s[len-1-i],s[i]]
  }
  return s

};
console.log(reverseString(['r','a','j','a','t']))

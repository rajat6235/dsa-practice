var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i]
      x++;
    }
  }
  return x
};
console.log(removeElement([3,2,1,5,3,4,8,3],3))
var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[x], nums[i]] = [nums[i], nums[x]];
      x++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));

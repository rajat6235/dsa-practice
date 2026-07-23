var removeDuplicates = function (nums) {
  let x = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[x] !== nums[j]) {
      x++;
      nums[x] = nums[j]; //modifies the original array by
      // copying the value at index j into index i, replacing whatever was previously there.
    }
  }
  nums.length = x + 1;
  return x + 1, nums;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// brute force method not ideal as sorting alone causes o(n logn)
//also rememmber sort modifies original array not its copy is returned
// var missingNumber = function(nums) {
//     nums.sort((a,b)=>a-b)
//  for (let i = 1 ; i <nums.length ; i++){
//     if(nums[i]!==nums[i-1]+1){
//         return nums[i-1]+1
//     }
//  }

// };


var missingNumber = function(nums) {
    const n = nums.length
    const totalSum = n*(n+1)/2
    const currentSum = nums.reduce((prev,curr)=>prev+curr)
    return totalSum-currentSum
    
};
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
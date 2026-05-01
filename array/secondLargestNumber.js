// when a need largest is found then swap it current value with second largest
function secondLargestNumber(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;

      firstLargest = arr[i];
    }
  }
  return [firstLargest, secondLargest];
}
console.log(secondLargestNumber([2, 5, 6, 3, 9, 100]));

// var merge = function (nums1, m, nums2, n) {
//     // Approach 1
//     // Time Complexity: O(m + n)
//     // Space Complexity: O(m) because we create a copy of the first m elements.

//     const nums1Copy = nums1.slice(0, m);

//     let p1 = 0;
//     let p2 = 0;

//     for (let i = 0; i < m + n; i++) {

//         // Case 1:
//         // If all elements from nums2 have already been used,
//         // we must copy the remaining elements from nums1Copy.
//         //
//         // Case 2:
//         // Otherwise, if nums1Copy still has elements remaining
//         // and its current element is smaller than nums2's current element,
//         // copy the element from nums1Copy.
//         if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
//             nums1[i] = nums1Copy[p1];
//             p1++;
//         } else {
//             // Otherwise, copy the smaller element from nums2.
//             nums1[i] = nums2[p2];
//             p2++;
//         }
//     }

//     return nums1;
// };

var merge = function (nums1, m, nums2, n) {
  // Approach 2 (Optimal)
  // Time Complexity: O(m + n)
  // Space Complexity: O(1)
  //
  // Idea:
  // Instead of merging from the beginning, merge from the end.
  // Since nums1 has enough empty space at the end, placing the
  // largest element first prevents overwriting useful values.

  let p1 = m - 1; // Last valid element in nums1
  let p2 = n - 1; // Last element in nums2

  for (let i = m + n - 1; i >= 0; i--) {
    // If nums2 is exhausted, the remaining elements in nums1
    // are already in the correct position.
    if (p2 < 0) break;

    // If nums1 still has elements and its current element
    // is larger, place it at the current position.
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      // Otherwise, place the current element from nums2.
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  return nums1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

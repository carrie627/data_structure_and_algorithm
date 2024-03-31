// NAIVE SOLUTION time complexity O(N**2)
// function masSubArraySum(arr, num) {
//   if (num > arr.length) return null;

//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp = temp + arr[i + j];
//     }
//     if (temp > max) max = temp;
//   }
//   return max;
// }

// console.log(masSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 2));

// Using sliding window pattern time complexity O(N)
function maxSubArrSum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArrSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 2));

// complete

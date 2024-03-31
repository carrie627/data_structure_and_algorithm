// My solution...............

function validAnagram(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  console.log(arr1, arr2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1, frequencyCounter2);

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// const arr1 = [1, 2, 3, 2];
// const arr2 = [9, 1, 4, 4];

const str1 = "anagram";
const str2 = "nagaram";

console.log(validAnagram(str1, str2));

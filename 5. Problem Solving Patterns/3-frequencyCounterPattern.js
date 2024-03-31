// A NAIVE SOLUTION
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    console.log(correctIndex);
    if (correctIndex === -1) {
      return false;
    }
    let h = arr2.splice(correctIndex, 1);
    console.log("h : ", h);
  }
  return true;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 1, 9];

console.log(same(arr1, arr2));

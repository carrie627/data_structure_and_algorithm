const unsortedArray = [
    56, 23, 89, 12, 45, 67, 34, 78, 9, 61, 37, 72, 15, 83, 28, 51, 95, 41, 6,
    88, 19, 68, 4, 74, 31, 53, 62, 8, 77, 92, 17, 42, 70, 26, 60, 2, 36, 71, 3,
    85, 48, 66, 21, 98, 59, 13, 76, 30, 50, 64, 10, 79, 25, 87, 35, 55, 11, 80,
    47, 99, 22, 69, 5, 91, 29, 46, 84, 7, 38, 57, 1, 54, 33, 96, 63, 18, 75, 44,
    16, 58, 27, 94, 40, 82, 32, 73, 14, 86, 20, 52, 39, 65, 24, 90, 49, 81, 43,
    97, 66, 4,
];

function bubbleSort(arr) {
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

// console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort(unsortedArray));

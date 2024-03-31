function insertionSort(arr) {
    let i, j;
    for (i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }

    return arr;
}

console.log(insertionSort([2, 4, 1, 5, 7, 3]));

// My Implementation

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = arr[i];
//         let temp;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (min > arr[j]) {
//                 min = arr[j];
//                 temp = arr[i];
//                 arr[i] = min;
//                 arr[j] = temp;
//             }
//             console.log(arr);
//         }
//     }
//     return arr;
// }

// tutor's implementation
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[lowest]) {
//                 lowest = j;
//             }
//         }

//         if (i !== lowest) {
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }

//     return arr;
// }

/********************************************
 *   es2015 implementation
 **********************************************/
function selectionSort(arr) {
    const swap = (arr, index1, index2) =>
        ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j;
        }

        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}

console.log(selectionSort([2, 4, 1, 5, 7, 3]));

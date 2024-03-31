// RADIX SORT HELPER FUNCTIONS
function getDigit(num, place) {
    return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        // if (digitCount(arr[i]) > maxDigits) maxDigits = digitCount(nums[i]);
        //the above line can be written this way
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// console.log(mostDigits([1, 56, 7777]));

//RADIX SORT IMPLEMENTATION
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], k);
            digitBuckets[digit].push(nums[j]);
        }

        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

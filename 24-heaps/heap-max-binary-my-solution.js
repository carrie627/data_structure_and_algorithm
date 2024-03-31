class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this._sinkDown();
        }
        return max;
    }

    insert(value) {
        this.values.push(value);
        this._bubbleUp(this.values);
    }

    _bubbleUp(arr) {
        let childIdx = arr.length - 1;
        let parentIdx = Math.floor((childIdx - 1) / 2);

        while (arr[parentIdx] < arr[childIdx]) {
            let temp = arr[parentIdx];
            arr[parentIdx] = arr[childIdx];
            arr[childIdx] = temp;

            childIdx = parentIdx;
            parentIdx = Math.floor((childIdx - 1) / 2);
        }
    }

    _sinkDown() {
        let rootIdx = 0;
        let leftChildIdx = 2 * rootIdx + 1;
        let rightChildIdx = 2 * rootIdx + 2;
        //THIS SOLUTION IS A LITTLE BIT WRONG........

        while (
            this.values[rootIdx] < this.values[leftChildIdx] &&
            this.values[rootIdx] < this.values[rightChildIdx]
        ) {
            let tempValue;
            if (this.values[leftChildIdx] > this.values[rightChildIdx]) {
                tempValue = this.values[rootIdx];
                this.values[rootIdx] = this.values[leftChildIdx];
                this.values[leftChildIdx] = tempValue;
                rootIdx = leftChildIdx;
                leftChildIdx = 2 * rootIdx + 1;
            } else {
                tempValue = this.values[rootIdx];
                this.values[rootIdx] = this.values[rightChildIdx];
                this.values[rightChildIdx] = tempValue;
                rootIdx = rightChildIdx;
                rightChildIdx = 2 * rootIdx + 2;
            }
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(51);
heap.insert(15);
heap.extractMax();

console.log(heap);

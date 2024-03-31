class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode; // Have to see weather it should be newNode instead of this.head
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // In my solution for popping, there is a problem that is, you can traverse the popped node that is returned(i.e: temp.prev etc)
    pop() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        }

        let temp;
        let currentNode = this.head;
        for (let i = 0; i < this.length - 2; i++) {
            currentNode = currentNode.next;
        }
        temp = currentNode.next;
        this.tail = temp.prev;
        this.tail.next = null;
        this.length--;
        return temp;
    }

    set(index, val) {
        if (!this.get(index)) return false;

        let node = this.get(index);
        node.val = val;
        return true;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.pop());

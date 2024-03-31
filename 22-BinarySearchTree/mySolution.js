class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while (true) {
            if (val < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else if (val > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    find(val) {
        if (this.root === null) return "No node exists!";
        let currentNode = this.root;

        while (true) {
            if (val === currentNode.value) return "Found!";
            if (val < currentNode.value) {
                if (currentNode.left === null) {
                    return "Not found!";
                } else {
                    currentNode = currentNode.left;
                }
            } else if (val > currentNode.value) {
                if (currentNode.right === null) {
                    return "Not found!";
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.find(11));

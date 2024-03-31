const nextt = {
    hi: "hello",
    by: "goodbye",
};

class Car {
    constructor() {
        this.carname = "hello";
        this.brand = "carrie";
    }

    change() {
        this.carname = nextt;
        this.brand = this.carname;

        this.brand.by = "hahahahahahah";
        this.brand = "lo";
        return this;
    }
}

let car = new Car();
console.log(car.change());

/***********************************************************
 *  Geeksforgeeks solution
 **********************************************************/

//User defined class node
// class Node {
//     constructor(element) {
//         this.element = element;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     //add an element at the end of list
//     add(element) {
//         // create a new node
//         let node = new Node(element);

//         // to store current node
//         let current;

//         //if this list is empty
//         //add the element and make it head
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             current = this.head;

//             console.log("current", current);
//             //iterate to the end of the list
//             while (current.next) {
//                 current = current.next;
//             }
//             // add node
//             current.next = node;
//         }

//         this.size++;
//         return this;
//     }
// }

// let first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

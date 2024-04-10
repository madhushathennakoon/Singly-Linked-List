// -------------------------------------------------------------------- //

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // // Push ------------------------------------------------------------
  // -----------------------------------------------------------------

  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Push ------------------------------------------------------------
  // -----------------------------------------------------------------

  // // Insert first node -----------------------------------------------
  // -----------------------------------------------------------------

  //   insertFirst(value) {
  //     const newNode = new Node(value);

  //     if (this.head === null) {
  //       this.head = newNode;
  //       console.log(this.head);
  //     } else {
  //       console.log(newNode);
  //       newNode.next = this.head;

  //       this.head = newNode;
  //     }
  //   }
  // }

  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // insertFirst(value) {
  //   this.head = new Node(value, this.head);
  //   this.size++;
  // }

  // Insert first node -----------------------------------------------
  // -----------------------------------------------------------------

  // // Insert last node ------------------------------------------------
  // -----------------------------------------------------------------

  insertLast(value) {
    const node = new Node(value);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      // console.log(current);

      while (current.next) {
        current = current.next;
        // console.log(current);
      }
      current.next = node;
      // console.log(this.head);
    }
    this.size++;
  }

  // Insert last node ------------------------------------------------
  // -----------------------------------------------------------------

  // // InsertAt --------------------------------------------------------
  // -----------------------------------------------------------------

  insertAt(value, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    //if first index
    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    const node = new Node(value);
    let current, previous;

    // Set current to first
    current = this.head;
    // console.log("current is = ", current);
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      // console.log("previous is = ", previous);
      count++;
      current = current.next; // Node after index
      // console.log("another curr = ", current);
    }

    node.next = current;
    // console.log("another another curr is = ", node.next);
    previous.next = node;
    // console.log("  === ", node);

    this.size++;
  }

  // InsertAt --------------------------------------------------------
  // -----------------------------------------------------------------

  // // InsertAfter ----------------------------------------------------
  // -----------------------------------------------------------------

  insertAfter(nodeValue, value) {
    const newNode = new Node(value);

    if (this.head === null) {
      console.log("Linked list is empty.");
      return;
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === nodeValue) {
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return;
      }
      current = current.next;
    }

    console.log("Node not found in the linked list.");
  }

  // InsertAfter ----------------------------------------------------
  // ----------------------------------------------------------------

  // // InsertBefore ----------------------------------------------------
  // -----------------------------------------------------------------

  insertBefore(nodeValue, value) {
    const newNode = new Node(value);

    if (this.head === null) {
      console.log("Linked list is empty.");
      return;
    }

    if (this.head.value === nodeValue) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === nodeValue) {
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return;
      }
      current = current.next;
    }

    console.log("Node not found in the linked list.");
  }

  // InsertBefore ----------------------------------------------------
  // -----------------------------------------------------------------

  display() {
    if (this.head === null) {
      console.log("Linked list is empty.");
      return;
    }

    let current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
    console.log("LinkedList Size = ", this.size);
  }
}

// Create a new linked list
const myLinkedList = new LinkedList();

myLinkedList.push(100);
myLinkedList.push(200);
myLinkedList.push(300);

// myLinkedList.insertAt(1000, 1);

// myLinkedList.insertFirst(10);

// myLinkedList.insertLast(100);

// myLinkedList.insertAfter(200, 5000);
// myLinkedList.insertBefore(100, 5000);

myLinkedList.display();

console.log(myLinkedList);

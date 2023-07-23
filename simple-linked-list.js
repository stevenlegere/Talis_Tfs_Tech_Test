//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// The constructor of the List class should be able to accept an arbitrary number of arguments,


// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// The constructor of the List class should be able to accept an arbitrary number of arguments,

class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get next() {
    return this._next;
  }

  set next(newNext) {
    this._next = newNext;
  }
}

// const element1 = new Element(10);
// console.log(element1.value);

// element1.value = 20;
// console.log(element1.value);

// const element2 = new Element(30);
// console.log(element2.value);

// element1.next = element2;

// console.log(element1.next);

// console.log(element1.next.value);

class List {
  constructor(...args) {
    this._length = 0;  // Initialise the list length to 0.
    this._head = null; // Initialise the head of the list to null.
    this._tail = null; // Initialise the tail of the list to null.

    // If the constructor is called with a single array argument, add its elements to the list.
    if (args.length === 1 && Array.isArray(args[0])) {
      args[0].forEach(arg => this.add(arg));
    } else {
      // If the constructor is called with multiple arguments or without arguments, add them to the list.
      args.forEach(arg => this.add(arg));
    }
  }

  // Static method to create a new List from an array of elements.
  static fromArray(...args) {
    const list = new List(); // Create a new instance of List.
    args.reverse().forEach(element => list.add(element)); // Add elements from the array in reverse order.
    return list; // Return the new List.
  }

  // Method to add a new element to the head of the list.
  add(nextValue) {
    const newElement = nextValue instanceof Element ? nextValue : new Element(nextValue);
    // If the head is null, the list is currently empty.
    if (this._head === null) {
      this._head = newElement;
      this._tail = newElement;
    } else {
      // If the list is not empty, add the new element to the head and update the head.
      newElement.next = this._head;
      this._head = newElement;
    }
    this._length++; // Increment the length of the list.
  }

  // Getter method to return the length of the list.
  get length() {
    return this._length;
  }

  // Getter method to return the head of the list.
  get head() {
    return this._head;
  }

  // Method to convert the list to an array.
  toArray() {
    const result = [];
    let current = this._head;
    // Traverse the list and add each element's value to the resulting array.
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result; // Return the array representation of the list.
  }

// Method to reverse the list
    reverse() {
      let prev = null;
      let current = this._head;
      let next = null;
      
// Traverse the list and reverse the 'next' pointer of each element
      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }

// Update the head and tail pointers of the list
      this._tail = this._head;
      this._head = prev;

      return this; // Return the reversed list
    }
}

// Had to use common js model as ECMA Script waw not working with jest and therefor couldn't print output to node.js for proof of usage
module.exports = {
  List,
  Element,
};



// BELOW IS THE ORGINAL CODE TO WORK FROM - LEFT UNTOUCHED

// export class List {
//   constructor() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   add(nextValue) {
//     throw new Error('Remove this statement and implement this function');
//   }

//   get length() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   get head() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   toArray() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   reverse() {
//     throw new Error('Remove this statement and implement this function');
//   }
// }

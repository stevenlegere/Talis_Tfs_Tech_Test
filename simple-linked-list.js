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

class List {
  constructor(...args) {
    this._length = 0;
    this._head = null;
    this._tail = null;
    // args.forEach(arg => this.add(arg));
  }

  add(nextValue) {
    const newElement = nextValue instanceof Element ? nextValue : new Element(nextValue);
    if (this._head === null) {
      this._head = newElement;
      this._tail = newElement;
    } else {
      newElement.next = this._head;
      this._head = newElement;
    }
    this._length++;
  }
  

  get length() {
    return this._length;
  }

  get head() {
    return this._head ? this._head : null;
  }
}

module.exports = {
  List,
  Element,
};

// Test code (if this is in the same file, move it to a separate file for testing)

// const myList = new List();

// console.log(myList.head);

// myList.add(10);
// console.log(myList.head);

// myList.add(20);
// console.log(myList.head);

// myList.add(30);
// console.log(myList.head);



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

//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// The constructor of the List class should be able to accept an arbitrary number of arguments,


class Element {
  constructor(value) {
    this._value = value; // Initialise the value of the element.
    this._next = null;  // Initialise the next pointer of the element.
  }

  get value() {
    return this._value; // Getter to return the value of the element.
  }

  set value(newValue) {
    this._value = newValue; // Setter to update the value of the element.
  }

  get next() {
    return this._next; // Getter to return the next pointer of the element.
  }

  set next(newNext) {
    this._next = newNext; // Setter to update the next pointer of the element.
  }
}

class List {
  constructor(values) {
    this._length = 0;
    this._head = null;
    this._tail = null;

    // If the constructor is called with a single array argument, add its elements to the list.
    if (Array.isArray(values)) {
      values.forEach(value => this.add(value));
    } else {
      // If the constructor is called with multiple arguments or without arguments, add them to the list.
      for (let i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
    }
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
// change the next pointer of each element to point to the previous element
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

// Define the insertAfter method
insertAfter(valueToInsertAfter, newValue) {
  const newElement = new Element(newValue);
  let current = this._head;

  while (current !== null) {
    if (current.value === valueToInsertAfter) {
      newElement.next = current.next;
      current.next = newElement;
      if (current === this._tail) {
        this._tail = newElement;
      }
      this._length++;
      return this;
    }
    current = current.next;
  }

  // If the element with valueToInsertAfter is not found, add the new element at the end of the list.
  if (this._head === null) {
    this._head = newElement;
    this._tail = newElement;
  } else {
    this._tail.next = newElement;
    this._tail = newElement;
  }
  this._length++;
  return this;
}
}

// Had to use common js model to export as ECMA Script not working with jest and therefor couldn't print output to node.js for proof of usage
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

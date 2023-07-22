//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// The constructor of the List class should be able to accept an arbitrary number of arguments,


export class Element {
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



export class List {
  constructor(...args) {
    this._length = 0;
    this._head = null;
    this._tail = null;
    args.forEach(arg => this.add(arg));
  }

  add(nextValue) {
    const newElement = new Element(nextValue);
    if (this._head === null) {
      this._head = newElement;
      this._tail = newElement;
    } else {
      this._tail.next = newElement;
      this._tail = newElement;
    }
    this._length++;
  }
  
  get length() {
    return this._length;
  }

 // new Lists have a null head element
  get head() {
    return this._head ? this._head.value : null;
    // ? this._head.value : null; had me stumpled for a while. The head getter was returning the element object instead of the value.
  }

  // adding an Element to an empty list sets the head Element
  toArray() {
    const result = [];
    let current = this._head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
   }
  }




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

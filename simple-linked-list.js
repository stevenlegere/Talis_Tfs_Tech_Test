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

  // set next(newNext) {
  //   this._next = newNext;
  // }
}

export class List {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }

  add(nextValue) {
    throw new Error('Remove this statement and implement this function');
  }

  get length() {
    throw new Error('Remove this statement and implement this function');
  }

  get head() {
    throw new Error('Remove this statement and implement this function');
  }

  toArray() {
    throw new Error('Remove this statement and implement this function');
  }

  reverse() {
    throw new Error('Remove this statement and implement this function');
  }
}

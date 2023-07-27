// app.js
// Use cases

const { List, Element } = require('./simple-linked-list');

// Use case for the class Element

// Create a new element
const firstElement = new Element(10);
const secondElement = new Element(20);
const thirdElement = new Element(30);

console.log(firstElement.value); // 10
console.log(firstElement.next); // null
console.log(secondElement.value); // 20

firstElement.next = secondElement;
console.log(firstElement.next); // Element { _value: 20, _next: null }
secondElement.next = thirdElement;
console.log(firstElement.next.next); // Element { _value: 30, _next: null }

// sets the linkedList variable to firstElement, making it the head of the linked list.
let linkedList = firstElement;


// Traverse the linked list created above
function traverseLinkedList(startElement) {
    let current = startElement;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

traverseLinkedList(firstElement); // 10 20 30


// Inserting in to a linked list
// Insert at the head
function insertAtHead(startElement, newValue) {
    const newElement = new Element(newValue);
    newElement.next = startElement;
    return newElement;
}

linkedList = insertAtHead(linkedList, 1); // 5 10 20 30
console.log(linkedList.value); // 1

// Insert at the tail
function insertAtTail(startElement, newValue) {
    const newElement = new Element(newValue);
    let current = startElement;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newElement;
    return startElement;
}

linkedList = insertAtTail(linkedList, 40); // 1 5 10 20 30 40
console.log(linkedList.value); // 40

traverseLinkedList(linkedList); // 1 5 10 20 30 40


// Insert at a given position, 15 after 10
function insertAfterValue(startElement, previousValue, newValue) {
    let current = startElement;
    while (current !== null) {
        if (current.value === previousValue) {
            const newElement = new Element(newValue);
            newElement.next = current.next;
            current.next = newElement;
            return startElement;
        }
        current = current.next;
    }
    return startElement; // If the previousValue is not found, return the original list
}
linkedList = insertAfterValue(linkedList, 10, 15); // 1 5 10 15 20 30 40
traverseLinkedList(linkedList); // 1 5 10 15 20 30 40



// Deleting from a linked list

function deleteElement(startElement, targetValue) {
    if (startElement === null) {
        return null;
    }

    if (startElement.value === targetValue) {
        return startElement.next;
    }

    let current = startElement;
    while (current.next !== null) {
        if (current.next.value === targetValue) {
            current.next = current.next.next;
            return startElement;
        }
        current = current.next;
    }
    return startElement;
}
linkedList = deleteElement(linkedList, 20); // 1 5 10 30 40
traverseLinkedList(linkedList); // 1 5 10 30 40

// Deleting from the tail

function deleteFromTail(startElement) {
    // if the list is empty of has only one element, return null
    if (startElement === null || startElement.next === null) {
        return null;
    }

    let current = startElement;
    let previous = null;

    // Traverse the list until current reaches the tail
    while (current.next !== null) {
        previous = current;
        current = current.next;
    }

    // Update the next pointer of the second-to-last element to null
    previous.next = null;

    // Return the head of the linked list after deletion
    return startElement;
}

linkedList = deleteFromTail(linkedList); // 1 5 10 30
traverseLinkedList(linkedList); // 1 5 10 30


// Convert a linked list to an array
// Set the variable and the values
let linkedList1 = new List(100, 200, 300, 400, 500);
const arrayRepresentation = linkedList1.toArray();
console.log(arrayRepresentation); // [ 100, 200, 300, 400, 500]
traverseLinkedList(linkedList1.head); // 100 200 300 400 500

// Reverse a linked list
linkedList1 = linkedList1.reverse();
traverseLinkedList(linkedList1.head); // 500 400 300 200 100

// Create a sample linked list
// should insert new node after the given previous node
const list = new List([3, 2, 1]);
const valueToInsertAfter = 3;
const newValue = 4;
list.insertAfter(valueToInsertAfter, newValue);
console.log(list.toArray()); // Output: [1, 2, 4, 3]



# Talis + Technology from Sage Tech Test

# Simple Linked List with Test-Driven Development.

JavaScript implementation of a List data structure to meet pre-written tests, therefor making it a TDD approach. The List class consists of Element objects, each holding a value and a pointer to the next element in the list. The list supports adding elements to the head and can be converted to an array. Additionally, it provides a method to reverse the list.

### Element class

The Element class represents the individual elements in the list. Each element contains a value and a reference to the next element in the list.

## Constructor

### Element(value)

- value: Getter and setter to be stored in the element.

### Properties

- value: Getter and setter for the value of the element.
- next: Getter and setter for the reference to the next element in the list

### Methods

## add(nextValue)

- nextValue: Adds a new element to the head of the list. If an Element object is provided, it will be used directly. Otherwise, a new Element object will be created with the given value.

## toArray()

- toArray(): Returns an array representation of the list. The elements value are arranged in the order they appear in the list

## reverse()

- reverse() the order of the elements in the list. This method modifies the list by placement.
- Returns the reversed list.

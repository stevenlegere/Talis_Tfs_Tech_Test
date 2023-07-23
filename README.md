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




--------------------------
--------------------------


# Simple Linked List

Welcome to Simple Linked List on Exercism's JavaScript Track.
If you need help running the tests or submitting your code, check out `HELP.md`.

## Instructions

Write a simple linked list implementation that uses Elements and a List.

The linked list is a fundamental data structure in computer science,
often used in the implementation of other data structures. They're
pervasive in functional programming languages, such as Clojure, Erlang,
or Haskell, but far less common in imperative languages such as Ruby or
Python.

The simplest kind of linked list is a singly linked list. Each element in the
list contains data and a "next" field pointing to the next element in the list
of elements.

This variant of linked lists is often used to represent sequences or
push-down stacks (also called a LIFO stack; Last In, First Out).

As a first take, lets create a singly linked list to contain the range (1..10),
and provide functions to reverse a linked list and convert to and from arrays.

When implementing this in a language with built-in linked lists,
implement your own abstract data type.

## Source

### Created by

- @apapirovski

### Contributed to by

- @maruthimohan
- @matthewmorgan
- @rchavarria
- @SleeplessByte

### Based on

Inspired by 'Data Structures and Algorithms with Object-Oriented Design Patterns in Ruby', singly linked-lists. - https://web.archive.org/web/20160731005714/http://brpreiss.com/books/opus8/html/page96.html

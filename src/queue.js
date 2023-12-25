const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {

  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new Node(value);
    let current;
    if (this.size === 0) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;

    return value;
  }
}

module.exports = {
  Queue
};

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  dequeue() {
    if (this.tail) {
      let temp = this.tail;
      if (this.tail.prev) {
        temp.prev.next = null;
        this.tail = temp.prev;
      } else {
        this.head = null;
        this.tail = null;
      }
      return temp.val;
    }
    return null
  }
  enqueue(val) {
    let node = new Node(val);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
    }
    if (!this.tail) {
      this.tail = node;
    }
    this.head = node;
  }
  // below is not necessary for Queue, just practice. We talkin' bout practice
  findAndRemove(targetVal) {
    let recurseNodes = (target, node) => {
      if (node.val === target) {
        if (!node.prev) {
          
        }
      } else if (node.next) {
        return recurseNodes(target, node.next);
      } else {
        return null;
      }
    }
  }
}


let queue = new LinkedListQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue)
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue)
console.log(queue.dequeue());
console.log(queue)
console.log(queue.dequeue());

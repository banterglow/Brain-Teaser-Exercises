var MedianStream = function () {
  this.heap = [];
};

MedianStream.prototype = {
  insert: function (val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  },
  peekMedian: function () {
    if (this.heap.length % 2 === 0) {
      let mid = this.heap.length / 2;
      return (this.heap[mid-1] + this.heap[mid]) / 2
    }
    return this.heap[Math.floor(this.heap.length/2)]
  },
  size: function () {
    return this.heap.length;
  },
  swap: function (indexOne, indexTwo) {
    let temp = this.heap[indexTwo];
    this.heap[indexTwo] = this.heap[indexOne];
    this.heap[indexOne] = temp;
  },
  bubbleUp: function (currentIndex) {
    currentIndex++;
    let parent = currentIndex % 2 === 0 ? (currentIndex) / 2 : (currentIndex - 1) / 2;
    if (parent >= 0 && this.heap[currentIndex-1] < this.heap[parent-1]) {
      // check if child is greater than parent, swap if necessary and recurse
      this.swap(currentIndex - 1, parent - 1);
      this.bubbleUp(parent-1);
    }
    // } else {
    //   // compare sibling nodes, and reorder if necessary
    //   if (currentIndex % 2 === 0 && this.heap[currentIndex - 1] > this.heap[currentIndex]) {
    //     this.swap(currentIndex - 1, currentIndex);
    //   } else if (currentIndex % 2 === 1 && this.heap[currentIndex - 1] < this.heap[currentIndex - 2]) {
    //     this.swap(currentIndex - 1, currentIndex - 2);
    //   } 
    // }
  }
};

var mStream = new MedianStream();
mStream.insert(1);
mStream.insert(3);
mStream.insert(2);
mStream.insert(5);
mStream.insert(4);
mStream.insert(0);
console.log(mStream.heap);
mStream.insert(12);
console.log(mStream.heap);
mStream.insert(15);
console.log(mStream.heap);
console.log(mStream.peekMedian()); 
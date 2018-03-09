// two-way edges graph data structure

class GraphNode {
  constructor(val) {
    this.val = val;
    this.edges = [];
  }

  addEdge(node) {
    this.edges.push(node);
    node.edges.push(this);
  }
}

let breadthFirstTraversal = (node) => {
  // result shows order in which the nodes were touched. tracker stores whether that node has been visited.
  let result = [], tracker = new Map();
  let stack = node.edges;
  let nextRound = [];
  let visitOccured = true;
  while (stack.length && visitOccured) {
    visitOccured = false;
    for (let i = 0; i < stack.length; i++) {
      if (!tracker.has(stack[i].val)) {
        tracker.set(stack[i].val, true);
        result.push(stack[i].val);
        visitOccured = true;
      }
      nextRound = nextRound.concat(stack[i].edges);
    }
    stack = nextRound;
    nextRound = [];
  }
  return result;
}

let node1 = new GraphNode(1);
let node2 = new GraphNode(2);
let node3 = new GraphNode(3);
let node4 = new GraphNode(4);
let node5 = new GraphNode(5);
let node6 = new GraphNode(6);
let node7 = new GraphNode(7);
let node8 = new GraphNode(8);
let node9 = new GraphNode(9);
let node10 = new GraphNode(10);
let node11 = new GraphNode(11);
let node12 = new GraphNode(12);

node1.addEdge(node2);
node2.addEdge(node3);
node3.addEdge(node4);
node3.addEdge(node11);
node4.addEdge(node5);
node5.addEdge(node6);
node6.addEdge(node7);
node7.addEdge(node8);
node8.addEdge(node9);
node9.addEdge(node10);
node10.addEdge(node11);
node11.addEdge(node12);

console.log(breadthFirstTraversal(node1));
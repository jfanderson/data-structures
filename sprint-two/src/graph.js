

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.data = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.data[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.data;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgesToRemove = this.data[node];
  edgesToRemove.forEach(function(item) {
    var edge = this.data[item];
    edge.splice(edge.indexOf(node), 1);
  });
  delete this.data[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //console.log(this.data[fromNode], fromNode, toNode);
  return this.data[fromNode].indexOf(toNode) !== -1;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.data[fromNode].push(toNode);
  this.data[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var from = this.data[fromNode];
  from.splice(from.indexOf(toNode), 1);

  var to = this.data[toNode];
  to.splice(to.indexOf(fromNode), 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(Object.keys(this.data), function(key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Constructor: O(1)
 * addNode:     O(1)
 * contains:    O(1)
 * removeNode:  O(n)
 * hasEdge:     O(1)
 * addEdge:     O(1)
 * removeEdge:  O(1)
 * forEachNode: O(n)
 */




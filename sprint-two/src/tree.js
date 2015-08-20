var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }

  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Constructor: O(1)
 * addChild: O(1)
 * contains: O(N*M) where N is the number of nodes in the tree rooted by the node contains is called on,
 * and M is the length of each node's children array
 */

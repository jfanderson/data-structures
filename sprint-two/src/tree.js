var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
  node.parent = this;
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

treeMethods.removeFromParent = function() {
  var children = this.parent.children;

  for (var i = 0; i < children.length; i++) {
    if (this === children[i]) {
      children.splice(i, 1);
      break;
    }
  }

  this.parent === null;

  return this;
}


/*
 * Complexity: What is the time complexity of the above functions?
 * Constructor: O(1)
 * addChild: O(1)
 * contains: O(N*M) where N is the number of nodes in the tree rooted by the node contains is called on,
 * and M is the length of each node's children array
 */

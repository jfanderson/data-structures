var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTree.prototype);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else {
    var found = false;
    if (this.right !== null && this.right.contains(value)) {
      found = true;
    } else if (this.left !== null && this.left.contains(value)) {
      found = true;
    }
  }
  return found;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 * Constructor: O(1)
 * insert: O(log(n))
 * contains: O(n)
 * depthFirstLog: O(n)
 */

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;

    return value;
  };

  list.contains = function(target){
    var temp = list.head;
    while (temp) {
      if (temp.value === target) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  addToTail: O(1)
 *  removeHead: O(1)
 *  contains: O(N)
 */

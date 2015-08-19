var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var first = storage[0];
    for (var i = 1; i < someInstance.size(); i++) {
      storage[i-1] = storage[i];
    }
    delete storage[someInstance.size()-1];
    return first;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

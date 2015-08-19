var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};

  return someInstance;
};

queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.size()] = value;
};

queueMethods.dequeue = function() {
  var first = this.storage[0];
  for (var i = 1; i < this.size(); i++) {
    this.storage[i-1] = this.storage[i];
  }
  delete this.storage[this.size()-1];
  return first;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};



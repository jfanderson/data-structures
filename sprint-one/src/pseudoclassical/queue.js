var Queue = function() {
  this.storage = {};
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function() {
  var first = this.storage[0];
  for (var i = 1; i < this.size(); i++) {
    this.storage[i-1] = this.storage[i];
  }
  delete this.storage[this.size()-1];
  return first;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};



var Queue = function(){
  var someInstance = {
    storage: {}
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.size()] = value;
  },

  dequeue: function() {
    var first = this.storage[0];
    for (var i = 1; i < this.size(); i++) {
      this.storage[i-1] = this.storage[i];
    }
    delete this.storage[this.size()-1];
    return first;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};



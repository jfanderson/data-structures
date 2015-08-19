var Stack = function() {
  var someInstance = {
    storage: {}
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.size()] = value;
  },

  pop: function(){
    var last = this.storage[this.size()-1];
    delete this.storage[this.size()-1];
    return last;
  },

  size: function(){
    return Object.keys(this.storage).length;
  }
};

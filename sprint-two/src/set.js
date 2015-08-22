var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  if (isObject(item)) {

    var storage = this._storage;
    for (var i = 0; i < storage.length; i++) {
      if (isObject(storage[i])) {
        if (JSON.stringify(storage[i]) === JSON.stringify(item)) {
          return true;
        }
      }
    }

    return false
  }

  return this._storage.indexOf(item) !== -1;

  function isObject(item) {
    return typeof item === "object" && !Array.isArray(item);
  }
};

setPrototype.remove = function(item){
  if (this.contains(item)) {
    this._storage.splice(this._storage.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * All methods are O(1)
 */

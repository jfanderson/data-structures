var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._cache = {};
};

HashTable.prototype.insert = function(k, v){
  if (k in this._cache) {
    this._storage.set(this._cache[k], v);
  } else {
    var i = getIndexBelowMaxForKey(k, this._limit);
    if (this._storage.get(i)) {
      for (var j = 0; j < this._limit; j++) {
        if (this._storage.get(j)) {
          continue;
        } else {
          this._storage.set(j, v);
          this._cache[k] = j;
          break;
        }
      }
    } else {
      this._storage.set(i, v);
      this._cache[k] = i;
    }
  }
};

HashTable.prototype.retrieve = function(k){
  if (k in this._cache) {
    var i = this._cache[k];
    return this._storage.get(i);
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  if (k in this._cache) {
    var i = this._cache[k];
    this._storage.set(i, null);
    delete this._cache[k];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Constructor: O(1)
 * insert:      O(n)
 * retrieve:    O(1)
 * remove:      O(1)
 */

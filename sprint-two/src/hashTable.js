var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._total = 0;
};

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket) {
    var overwrote = false;

    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        bucket[j] = [k, v];
        this._storage.set(i, bucket);
        overwrote = true;

        break;
      }
    }

    if (!overwrote) {
      bucket.push([k, v]);
      this._storage.set(i, bucket);
      checkDouble.call(this);
      this._total++;
    }

  } else {
    this._storage.set(i, [[k,v]]);
    checkDouble.call(this);
    this._total++;
  }

  function checkDouble() {
    if (this._total + 1 >= Math.round(this._limit * .75)) {

      var newHashTable = new HashTable();
      newHashTable._limit = this._limit * 2;
      newHashTable._storage = LimitedArray(newHashTable._limit);

      this._storage.each(function(value) {
        if (value) {
          for (var i = 0; i < value.length; i++) {
            newHashTable.insert(value[i][0], value[i][1]);
          }
        }
      });

      this._limit = newHashTable._limit;
      this._storage = newHashTable._storage;
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket.length) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        return bucket[j][1];
      }
    }
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  
  if (bucket.length) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        bucket.splice(j, 1);
        this._storage.set(i, bucket);
        checkHalve.call(this);
        this._total--;
      }
    }
  }

  function checkHalve() {
    if (this._total - 1 <= Math.round(this._limit * .25) && this._limit > 8) {

      var newHashTable = new HashTable();
      newHashTable._limit = this._limit / 2;
      newHashTable._storage = LimitedArray(newHashTable._limit);

      this._storage.each(function(value) {
        if (value) {
          for (var i = 0; i < value.length; i++) {
            newHashTable.insert(value[i][0], value[i][1]);
          }
        }
      });

      this._limit = newHashTable._limit;
      this._storage = newHashTable._storage;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Constructor: O(1)
 * insert:      O(n) where n is the length of the hashTable
 * retrieve:    O(m) where m is the length of the array in the bucket
 * remove:      O(1)
 */

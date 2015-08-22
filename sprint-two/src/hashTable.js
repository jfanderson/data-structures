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
    console.log(this._total);
    if (this._total + 1 >= Math.round(this._limit * .75)) {
      this._limit *= 2;
    }
    console.log(this._total);
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
        this._total--;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Constructor: O(1)
 * insert:      O(n)
 * retrieve:    O(1)
 * remove:      O(1)
 */

class Sorter {
  constructor() {
    // your implementation
    this.arr = [];

this.compareNumeric = function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
this.REVERSE_COMPARATOR = function compareNumeric(b, a) {
      if (a > b) return 1;
      if (a < b) return -1;
    }


  this.comparator = this.compareNumeric;

    

    
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;

  }

  sort(indices) {
    // your implementation

    var indicesSorted = indices.sort(this.compareNumeric);
    var selected = [];
    for (var i = 0; i < indicesSorted.length; i++) {
      selected.push(this.arr[indicesSorted[i]]);
    }
    var sorted = selected.sort(this.comparator);
    for (var k = 0; k < sorted.length; k++) {
      this.arr[indicesSorted[k]] = sorted[k];
    }



  }

  setComparator(compareFunction) {
    // your implementation
    
      this.comparator = compareFunction;
    
  }
}
module.exports = Sorter;
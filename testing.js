// Helper function to check if an input is an object
function isObject(input) {
    return Object.prototype.toString.call(input) === "[object Object]";
  }
  
  // Helper function to convert an object's values to an array
  function objectValuesToArray(obj) {
    return Object.values(obj);
  }
  
  // myEach implementation
  function myEach(collection, callback) {
    if (isObject(collection)) {
      const objValues = objectValuesToArray(collection);
      objValues.forEach((val) => {
        callback(val);
      });
    } else {
      collection.forEach((val) => {
        callback(val);
      });
    }
  
    return collection;
  }
  
  // myMap implementation
  function myMap(collection, callback) {
    if (isObject(collection)) {
      collection = objectValuesToArray(collection);
    }
    
    const mappedArray = [];
    for (let i = 0; i < collection.length; i++) {
      mappedArray.push(callback(collection[i]));
    }
    
    return mappedArray;
  }
  
  // myReduce implementation
  function myReduce(collection, callback, acc) {
    if (isObject(collection)) {
      collection = objectValuesToArray(collection);
    }
    
    let startIndex = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIndex = 1;
    }
    
    for (let i = startIndex; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    
    return acc;
  }
  
  // myFind implementation
  function myFind(collection, predicate) {
    if (isObject(collection)) {
      collection = objectValuesToArray(collection);
    }
    
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    
    return undefined;
  }
  
  // myFilter implementation
  function myFilter(collection, predicate) {
    if (isObject(collection)) {
      collection = objectValuesToArray(collection);
    }
    
    const filteredArray = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        filteredArray.push(collection[i]);
      }
    }
    
    return filteredArray;
  }
  
  // mySize implementation
  function mySize(collection) {
    if (isObject(collection)) {
      return Object.keys(collection).length;
    } else {
      return collection.length;
    }
  }
  
  // Array functions
  
  // myFirst implementation
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // myLast implementation
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // Bonus: mySortBy implementation
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const aKey = callback(a);
      const bKey = callback(b);
      if (aKey < bKey) return -1;
      if (aKey > bKey) return 1;
      return 0;
    });
  }
  
  // Bonus: myFlatten implementation
  function myFlatten(array, shallow, newArr = []) {
    if (!Array.isArray(array)) {
      newArr.push(array);
    } else {
      for (let i = 0; i < array.length; i++) {
        if (shallow) {
          if (Array.isArray(array[i])) {
            newArr = newArr.concat(...array[i]);
          } else {
            newArr.push(array[i]);
          }
        } else {
          myFlatten(array[i], false, newArr);
        }
      }
    }
    return newArr;
  }
  
  // Object functions
  
  // myKeys implementation
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues implementation
  function myValues(object) {
    return objectValuesToArray(object);
  }
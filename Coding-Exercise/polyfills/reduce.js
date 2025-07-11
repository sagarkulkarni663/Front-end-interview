let data = [1, 2, 3, 4];
// const tempReduce= data.reduce((acc,item,index,array)=>acc+curr);

//polyfills for Reduce

Array.prototype.myReduce = function (callback, initialvalue) {
  let acc = initialvalue;
  if (this == null) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

let customPolyfills = data.reduce((acc, item, index, array) => acc + item, 0);
console.log(customPolyfills);

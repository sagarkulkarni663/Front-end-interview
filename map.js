let data = [1, 2, 3, 4];
// const tempMap= data.map((item,index,array)=>{});

//polyfills for map

Array.prototype.myMap = function (callback) {
  let temp = [];
  if (this == null) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const O = Object(this);
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

let customPolyfills = data.myMap((item, index, array) => item);
console.log(customPolyfills);

let data = [1, 2, 3, 4];
// const tempFilter= data.filter((item,index,array)=>console.log(item>2));

//polyfills for filter

Array.prototype.myFilter = function (callback) {
  let temp = [];
  if (this == null) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const O = Object(this);
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push((this[i]));
    }
  }
  return temp;
};

let customPolyfills = data.myFilter((item, index, array) =>item>2)
console.log(customPolyfills);

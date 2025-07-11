let data = [1, 2, 3, 4];
// const tempForeach= data.forEach((element) => console.log(element));

//polyfills for foreach

Array.prototype.myForeach = function (callback) {
  if (this == null) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

data.forEach((item) => console.log(item));

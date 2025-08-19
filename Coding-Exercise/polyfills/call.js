let data = {
  firstName: "sagar",
  lastName: "kulkarni",
};

function knowDetails(...args) {
  console.log(`hey iam ${this.firstName} ${this.lastName} from ${args}`);
}

//polyfills for call

Function.prototype.myCall = function (callback = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "this is not callable");
  }
  callback.function = this;
  callback.function(...args);
};

knowDetails.myCall(data, "hyderabad");

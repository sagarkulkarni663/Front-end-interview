let data = {
  firstName: "sagar",
  lastName: "kulkarni",
  printFullName: function (...args) {
    console.log(`iam ${this.firstName} ${this.lastName}`);
    console.log("Additional args:", ...args);
  },
};

// now if we wanna print printFullName  then we can call data.printFullName()

data.printFullName();

// if we want printFullName to use it somewhere ans pointing to some other this then we can use call method;
// it will call the function immediately
// call method will invoke the property with current object

let newData = {
  firstName: "sudheer",
  lastName: "kulkarni",
};

// now we can reuse the same function from data but we need to send the current context of this ;
// now newData wll be the current this of the data;
// in call we can use remaining args as individual
data.printFullName.call(newData, "hello", "world");

//---------------apply Method----------------//
// every thing is same apart how we invoke function
// it will call the function immediately
// in call we send comma separated arguments
// in apply we send list of arguments

data.printFullName.apply(newData, ["hello", "world"]);



//---------------Bind Method----------------//
// it is similar to call method
// it will not call the function immediately
// it will just bind the function with current this 
// it will return a new copy of function with bind values so that it can be called later 

let bindMethod=data.printFullName.bind(newData, "hello", "world");
bindMethod()


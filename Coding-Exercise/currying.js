// currying in javascript
// Question 1 ; sum (2)(6)(1)

function addition(x) {
  return function (y) {
    return function (z) {
      console.log(x + y + z);
    };
  };
}

addition(2)(6)(1)



/// logging utility;

function logger(info){
  return function(message){
    console.log(`${info} ${message} `)
  }
}
const sucess=logger('log[info]')
const fail=logger('log[error]')

sucess("this is ok")
fail('this is not ok ')



function createFilter(property){
  return function(value){
      return function (array){
          return array.filter((data)=>data[property]==value)
      }
  }
}

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];
const getData=createFilter("role");
console.log(getData('admin')(users))


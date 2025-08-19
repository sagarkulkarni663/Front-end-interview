let data = {
    firstName: "sagar",
    lastName: "kulkarni",
    printFullName: function (...args) {
      console.log(`iam ${this.firstName} ${this.lastName}`);
      console.log("Additional args:", ...args);
    },
  };

  let newData = {
    firstName: "sudheer",
    lastName: "kulkarni",
  };
//   const newfunc=data.printFullName.bind(newData,'hello')
//   console.log(newfunc())


  Function.prototype.myBind=function(callback={},...args){
    callback.function=this;
   

    return function(){
        return  callback.function(...args);
    }
  }
  const newfunc=data.printFullName.myBind(newData,'hello')
  console.log(newfunc())




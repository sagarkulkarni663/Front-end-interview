const promise = new Promise((resolve,reject)=>{
   reject(2)
})
console.log("hello world")

promise.then((result)=>console.log(result)).catch((error)=>console.log(error)).finally((output)=>console.log("nothing"))

console.log("fucntion stopped ")

const asyncFunc = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, 200);
    });
  };

async function run() {
    console.log("Start");
  
    const result = await asyncFunc(); // pauses here for 2 sec
  
    console.log(result);
  
    console.log("End");
  }

  run()
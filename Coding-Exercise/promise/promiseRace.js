const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "one");
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "two");
  });
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });

Promise.race([rej,data,rej,promise3]).then((result)=>console.log(result)).catch((err)=>console.log(err))     

// Promise.race: Settles with the first finished Promise, whether resolved or rejected.

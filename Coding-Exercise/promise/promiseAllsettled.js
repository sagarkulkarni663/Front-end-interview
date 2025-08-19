const data = Promise.resolve(2)
const rej=Promise.reject("some thing went wrong ");
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });

Promise.allSettled([data,rej,promise3]).then((result)=>console.log(result)).catch((err)=>console.log(err))     

// Promise.allSettled: Runs all Promises in parallel, waits for all to finish, returns both fulfilled and rejected results.

const data = Promise.resolve(2)
const rej=Promise.reject("some thing went wrong ");
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });

Promise.all([data,rej,promise3]).then((result)=>console.log(result)).catch((err)=>console.log(err))     

// Promise.all: Runs all Promises in parallel, resolves only if all succeed, rejects immediately if any fail.

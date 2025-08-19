const data = Promise.resolve(2)
const rej=Promise.reject("some thing went wrong ");
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });

Promise.any([rej,data,rej,promise3]).then((result)=>console.log(result)).catch((err)=>console.log(err))     

// Promise.any: Resolves with first success, rejects with AggregateError if all Promises fail.

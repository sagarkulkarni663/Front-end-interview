function onlyOnce(func, context) {
    let ran;
    return function () {
      if (func) {
        ran = func.call(context || this);
        func = null;
      }
    };
    return ran;
  }
  
  
  const data = onlyOnce(() => console.log("hello"));
  data();
  data();
  data();
  data();
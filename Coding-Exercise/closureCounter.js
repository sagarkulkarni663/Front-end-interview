const createCounter = () => {
  let counter = 0;

  function increment() {
    counter++;
    return counter;
  }
  function decrement() {
    counter--;
    return counter;
  }
  function getValues() {
    return counter;
  }
  return { increment, decrement, getValues };
};

const getValues = createCounter();
console.log(getValues.increment());

const counterB = createCounter();
console.log(counterB.increment());

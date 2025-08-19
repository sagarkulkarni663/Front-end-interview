function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    //   timer = setTimeout(() => func.call(this,...args), delay);
    timer = setTimeout(() => func(...args), delay);
  };
}

const search = (query) => {
  console.log(`Searching for: ${query}`);
};
const debounceSearch = debounce(search, 300);
debounceSearch("he");
debounceSearch("hel");
debounceSearch("hello");

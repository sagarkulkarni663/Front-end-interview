function useDebounce() {
let timerId;
return function(data,delay){
clearTimeout(timerId);
timerId=setTimeout(()=>{
    console.log("hello")
},delay)
}
  }


let data1 = useDebounce("hello", 500);
let data2 = useDebounce("hesdllo", 500);

let data3 = useDebounce("hesdllo", 500);
let data4 = useDebounce("hesdllo", 500);
let data5 = useDebounce("hesdllo", 500);



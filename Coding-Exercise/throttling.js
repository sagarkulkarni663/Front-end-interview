function throttle(fn,delay){
    let throttleId;
    return function(...args){
        if(throttleId==null){
            fn.apply(this,args)
            throttleId= setTimeout(()=>{throttleId=null},delay)
        }
    }
}
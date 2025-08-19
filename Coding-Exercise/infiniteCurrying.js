function infiniteCurrying(a){
    return function(b){
        if(b) return infiniteCurrying(a+b);
        return a;
    }
}

console.log(infiniteCurrying(1)(2)(3)(4)(5),(6)(7))
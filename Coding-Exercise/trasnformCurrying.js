function callable(func){
    return function curried(...args){
        if(args.length>=func.length){
            return func(...args)
        }else{
            return function(...next){
                return curried(...args,...next)
            }
        }
    }
}

const sum=(a,b,c,d)=>a+b+c+d;
const main= callable(sum);
console.log(main(1)(2)(3)(4))

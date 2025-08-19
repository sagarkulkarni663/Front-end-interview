function once (func,context){
    let result;
    let triggred=false
    return function (){
        if(!triggred){
            result=func.apply(context||this,arguments)
            triggred=true

        }
        return result

    }
}

const hello=once((a,b)=>console.log(a,b,"new"))

hello(1,3)
hello()
hello()
hello()
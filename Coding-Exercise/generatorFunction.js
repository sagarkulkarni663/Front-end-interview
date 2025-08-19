function* generator(i){
    yield i
}
const data=generator('hello');
data.next()

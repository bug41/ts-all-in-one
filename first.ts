interface Cat {meow:number}
interface Dog {bow:number}

function catOrDog(a: Cat | Dog): a is Dog{
    //타입 판별 직접 만듬
    if((a as Cat).meow){return false}
    return true;
}

//타입을 구분해주는 커스텀 함수를 직접 만들 수 있어요.
function pet(a: Cat | Dog){
    if(catOrDog(a)){
        console.log(a.bow);
    }

    if('meow' in a){
        console.log(a.meow);
    }
}
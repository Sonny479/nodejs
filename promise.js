/*var test = function(bool){
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            if(bool){
                resolve("fulfilled 상태입니다. then으로 연결됩니다.");
            }
            else{
                reject("rejected 상태입니다. catch로 연결됩니다.");
            }
        }, 1000)
    })
}

test(false)
.then( function(result){
    console.log(result);
})
.catch( function(err){//테스트
    console.log(err)
})*/


var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, "promise1");
});
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, "promise2");
});

Promise.all([promise1, promise2]).then(function(value) {
    console.log(value);
});
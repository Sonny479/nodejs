/*function add (x,callback){
    let sum=x+x;
    console.log(sum);
    callback(sum);
}


add(2,function (result) {
    add(result,function (result) {
        add(result,function(result){
            add(result,function (result) {
                console.log(" 끄,ㅌ");
            })
        })
    })
})*/


/*function add(x) {
    return new Promise((resolve,reject)=>{
        let sum = x+x;
        console.log(sum);
        resolve(sum);
    })
       
}

/*add(2).then(result=>{
    add(result).then(result=>{
        add(result).then(result=>{
            console.log("dd");
        })
    })
})*///의미없음

/*add(2).then(result=>{
    return add(result);
}).then(result=>{
    return add(result);
}).then(result=>{
    console.log(result);
})*/


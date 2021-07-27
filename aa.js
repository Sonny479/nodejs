
/*
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
    process.stdout.write(inputString);
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
*/

main();

// Complete the maxTickets function below.
function maxTickets(tickets) {
    /*tickets.sort(function(a,b){
        if(a==b)
        return a;
    })*/
    
    let cnt=1;
    let max=0;
    
    for(let i=0;i<tickets.length-1;i++){
        
        if(tickets[i]==tickets[i+1] || tickets[i]+1==tickets[i+1]){
            cnt++;
        }
        else{
            if(max < cnt){
                max = cnt;
            }
            cnt=1;
        }

       // console.log("max : " + max)
       // console.log("cnt : " + cnt)
       // console.log("========================")

    }
   
    return max;
}

function main() {
    
    

    let tickets = [10,12,50,11,13,54,12,15,14,55,56,57,58,13,13,13];
    
    for (let i = 0; i < tickets.length; i++) {

        
        
        tickets.sort(function(a,b){
            return a-b;
        });
        
        
        
        /*if(tickets[i]<tickets[i+1] && tickets[i] == tickets[i+1]-1){
             count = count+1;
            return count;
        }
        else{
            return 0;
        }*/
    }

    const res = maxTickets(tickets);
  // console.log(tickets);
    
  console.log(res + '\n');
  
}
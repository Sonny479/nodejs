const mysql = require('mysql2');
var cron = require('node-cron');
var fs = require('fs');
 
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sss',
  password:'Elzmf@1234'
});
let coin =0;
var sql = "INSERT INTO pj (ID) VALUES('?')";
var sql2 = fs.readFileSync('count.sql','utf-8');


con.connect();

function insert_into(con){
    con.query(sql,coin, function (err, result) {
        coin=coin+1;
        console.log("값:"+coin);
        
        if(err){
            console.log('오류입니다.');
            throw err;
        }
    });
}


//function select_into(con){
  const promise2 = con.query(sql2, function (result) {
        return new Promise(function(resolve,reject){
            if(result[0].namesCount%2 == 1){
                resolve("true");
            }
            else if(result[0].namesCount == 10){
                resolve("10");
            }
            else{
                reject("false");
            }
        });
        //var a = result[0].namesCount;
        
         /* if(a%2 ==0 ){
            return false;
        }
        else if(a%2 ==1 && a<11){
            console.log('Query result: ', result[0].namesCount);
            
            return true;
        }
        else if(a=10){
            console.log('Query result: ' + 10);
        }
        
        if(err){
            console.log('오류입니다.');
            throw err;
        }*/
    });
//}

promise2(true).then(function(result){
    console.log(result);
},function(err){
    console.log(err);
});


cron.schedule('*/3 * * * * *', function () {
    insert_into(con)
  
 });
cron.schedule('*/1 * * * * *', function () {
  
  
});




const mysql = require('mysql2');
const cron = require('node-cron');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'test'
});

let coin = 0;
var insert_sql = 'insert into cron(id) values (?)';
var count_sql = 'SELECT count(*) AS val from cron';


function insert_query(conn){    
    conn.query(insert_sql, coin,  function(error, results, fields){
        coin = coin +1;
            if(error){
                console.log("쿼리 오류입니다.");
                throw error;
            }
        });
}


function count_query(conn){
    return new Promise(function(resolve, reject){
        conn.query(count_sql, function(error, results, fileds){
            var num = results[0].val;
            //console.log(num);
            resolve(num);
        })
    })
}

function do_count_query(){
    count_query(conn)
    .then(function(result){
        if(result >= 10){
            return 10;
        }
        else{
            if(result%2==0){
                return false;
            }
            else{
                return true;
            }
        }
    })
    .then(function(val){
        console.log(val);
    });
}



cron.schedule('*/3 * * * * *', function(){
    console.log( '삽입된 값 : ' + coin);
    insert_query(conn);
});


cron.schedule('*/1 * * * * *', function(){
    do_count_query();
});
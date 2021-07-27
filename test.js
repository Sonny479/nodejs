const mysql = require('mysql2');
const cron = require('node-cron');

 
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sss',
  password:'elzmf@12'
 
});
let coin =0;
var sql = "INSERT INTO pj (ID) VALUES('?')";
var sql2 = "SELECT count(*) as asd from pj"
var a;

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

 function select_into(con){
   
    return new Promise(function(resolve,reject){
        var a = 0;
        con.query(sql2,function(err,result){
          a=result[0].asd
            console.log("안에있는 값: " + a);
        resolve(a);
        })
        
    })
        
}
   // console.log("밖에 있는 값: " + a);
    

    function third(){
    
            select_into(con)
            .then(function(succes){
             console.log("넘겨받은 값: " + succes);
                
                if(succes>=10){
                    return 10;
                }
                if(succes%2 == 1)
                    return true;
                
                else
                    return false;
                
            
    
            })
        .then(function(asd){
                console.log(asd);
        })
    }
    /*promise2(true).then(function(result){
    console.log(result);
},function(err){
    console.log(err);
});*/


cron.schedule('*/3 * * * * *', function () {
    insert_into(con);
  
 });
cron.schedule('*/1 * * * * *', function () {
   third();
});

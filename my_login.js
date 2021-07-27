var express = require('express');
var app = express();
const mysql = require('mysql2');
var router = express.Router();
var fs=require('fs');
var read = fs.readFileSync('public/my_login.html','utf8');
var crypto = require('crypto');
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));



// DATABASE SETTING (Google Cloud SQL)
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sss',
    password:'elzmf@12'
   
  });
con.connect();

app.get('/',(req,res)=>{
    res.send(read);
});
app.listen(5000);
   

app.get('/signup',(req,res)=>{
    var sign = req.query.id;
    var temp_sign2= req.query.pw;
 
    var read3 = fs.readFileSync('public/signup.html','utf8');
    var sign2 = crypto.createHash('sha512').update(temp_sign2).digest('base64');

    con.query(`INSERT INTO sss.\`user\`
    (id, pw)
    VALUES(?, ?); 
    `,[sign,sign2],function(err,result){
    
        if(err){
            console.log("오류");
            throw err;
        }
        res.send(read3 + '\n'+"id : "+sign+" pw:"+sign2);
     });
});

app.get('/login',(req,res)=>{
    var id  = req.query.id;
    var pw = req.query.pw;
    
    var sign2 = crypto.createHash('sha512').update(pw).digest('base64');
    
    var arr =[id,sign2];

    let bool = false;
    
    var read2 = fs.readFileSync('public/login.html','utf8');
    con.query("select id , pw , case when id = ? and pw = ? then true else false END as val from user",arr,function(err,result){//쿼리문 수정
        
        
        var i=0;
        if(err){
            res.send("로그인 오류");
        }
        for(i=0;i<result.length;i++){
            if(result[i].val==false){
                
            }
            else{
                bool=true;
            }
        }
        if(bool){
            res.send(read2);

        }else{
            res.send("실패");
        }

    
            
        
        
    })
})




        /*for(i=0;i<result.length;i++){
            

            if(result[i].val ==false){ // 존재 할경우
                
            }
            
            else{ //존재하지 않을 경우
                bool=true;
            }

            
        }
            
        if(bool){
            res.send(read2);
        }
        else {
            res.send("실패");
        }*/
            
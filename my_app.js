const mysql = require('mysql2');
var express=require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    static = require('serve-static');
const session = require('express-session');
    var app = express();
    var router = express.Router();

const con = mysql.createConnection({
    host: 'localhost',
     user: 'root',
    database: 'sss',
    password:'Elzmf@1234'
})


app.post('/mylogin',function(req,res){
    var id = req.body.username;
    var pw= req.body.password;
    if(id && pw){
        con.query("SELECT *FROM user where id=? AND pw=?",[id,pw],function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/');
                res.end();
            } else {              
                res.send();    
            }            
        });
    } else {        
        res.send('false');    
        res.end();
    }

});


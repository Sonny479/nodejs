/*var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    static = require('serve-static');
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

router.route('/process/my_login/').post(function(req, res){
    console.log('첫 번째 미들웨어 요청 처리');
    var paramName = req.params.name;

    var paramId = req.body.id || req.query.id;
    var paramPw = req.body.password || req.query.password;
    res.writeHead('200', {
        'Content-Type': 'text/html;charset=utf8'
    });

    res.write('<h1>Express 서버에서 응답한 결과</h1>');
   // res.write('<div><p>Param Name: ' + paramName + '</p></div>');
    res.write('<div><p>Param ID: ' + paramId + '</p></div>');
    res.write('<div><p>Param PW: ' + paramPw + '</p></div>');
    res.write("<br><a href='/login.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});

app.use('/', router);
http.createServer(app).listen(3000, function () {
    console.log('Express 서버가 3000번 포트에서 시작');
})*/
//모듈 임포트
var express = require('express');
var app = express()
var morgan = require('morgan') //로그 모듈 임포트
var mysql = require('mysql') //mysql 임포트
var bodyParser = require('body-parser');
//미들웨어 설정
app.use(morgan('short')) //로그 미들웨어
app.use(express.static('./public')) //기본 파일 폴더 위치 설정
app.use(bodyParser.urlencoded({extended:false}))
//라우트로 분리시켜주기
var userRouter = require('./router/user.js')

//상품리스트 게시판~!
var productRouter = require('./router/product.js')
app.use(userRouter)
app.use(productRouter)
//var PORT = process.env.PORT || 3003
//서버 가동
app.listen(3003,function(){
console.log("서버가동")
})


const crypto = require('crypto');

var a = crypto.createHash('sha512').update('aa').digest('base64');
var b = crypto.createHash('sha512').update('aa').digest('hex');

console.log(a) 
console.log(b)

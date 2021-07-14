const mysql = require('mysql2/promise');


/*const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'sss',
    pw:'Elzmf@1234'
});*/
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sss',
    password:'Elzmf@1234'
});



const test = async()=>{
    try{
      const con = await pool.getConnection(async conn=>conn);
      var [sql_a] = "INSERT into a (a_id) VALUES(?)";
     var arr = new Array('zero','one','two');
     var i;
    
     for(i=0;i<=arr.length;i++){
            arr[i]=true;
     }
     await con.beginTransaction();

      const s = await con.query([sql_a],arr[i],[a_id]);
      if(arr[i]){
          console,log("true");
          await con.commit();
        
    }else{
        console.log("false");
        await con.rollback();
     }
        await connection.release();
        return s;
    }
    catch(err){
        await con.rollback();
        await connection.release();
        console.log("query error");
        return false;
    
    }
};
test();
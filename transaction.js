const mysql=require('mysql2/promise');
//const cron = require('node-cron');
/*const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sss',
    password:'Elzmf@1234'
});

*/
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sss',
    password:'Elzmf@1234'
    

    
});






const test = async ()=>{
    try{
            
            const connection = await pool.getConnection(async conn =>conn);
            try{
                
                var insertS1 = "INSERT INTO A (A_ID) VALUES('?')";
                var insertS2 = "INSERT INTO B (B_ID) VALUES('?')";
               // var drop_a="DROP TABLE A";
               // var drop_b="DROP TABLE B";
               // var create_a="CREATE TABLE A(a_id VARCHAR(30) not null primary key);"
                //var create_b="CREATE TABLE B(b_id VARCHAR(30) not null primary key);"
                var i=0;
                var con=true;
                connection.beginTransaction();
                
                const rows_a = await connection.query(insertS1,i);
                const rows_b = await connection.query(insertS2,i);

                /*const drop1 = await connection.query(drop_a);
                const drop2 = await connection.query(drop_a);

                const create1 = await connection.query(create_a);
                const create2 = await connection.query(create_b);*/


                if(con){
                    console.log("true");
                 //   await connection.query(drop_a,drop_b,create_a,create_b);
                    await connection.commit();
                  
                }else{
                    console.log("false");
                    await connection.rollback();
                }
                
                
                connection.release(); //다시 커네션풀 반환;
                
                return rows_a,rows_b;

            } catch(err){
                await connection.rollback();
                connection.release();
                console.log("Query error");
                return false;
            }
        }catch(err){
            console.log('DB error');
            return false;

        }
        
};

const user =test();
console.log(user);

   // con.connect();
  
//function end_table(con){
   // con.query(drop_a,drop_b,create_a,create_b);
//}
//cron.schedule('*/6 * * * * *', function () {
 //   end_table(con);
  
 //});






/*const dbTest = async () => {
	try {
		const connection = await pool.getConnection(async conn => conn);
		try {
			
			const a_id = 'HELLO';
			//const PW = 'WORLD';
			const [rows] = await connection.query('INSERT INTO a(a_id) VALUES(?)', [a_id]);
			connection.release();
			return rows;
		} catch(err) {
			console.log('Query Error');
			connection.release();
			return false;
		}
	} catch(err) {
		console.log('DB Error');
		return false;
	}
}; 
console.log(dbTest);*/
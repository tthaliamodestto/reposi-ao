//import mysql from 'mysql2/promise';

//import 'dotenv/config';

//const pool = mysql.createPool({
  //  host: process.env.DB_HOST,
   // user: process.env.DB_USER,
    //password: process.env.DB_PASSWORD,
   // database: process.env.DB_NAME,
    //port: process.env.DB_PORT || 3306,
    //waitForConnections: true,
    //connectionLimit: 10,
    //queueLimit: 0,
//});

//export default pool;


import mysql from 'mysql2/promise';
import 'dotenv/config'; 

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',         
  password: '1234',
  database: 'rep_nath',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
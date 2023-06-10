import mysql from 'mysql2';
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.password,
    database: 'nodejs_basic'
});

export default connection;
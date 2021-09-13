const mysql = require('mysql')
let database;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
   // database: 'eldoradoapp'
})

module.exports = connection

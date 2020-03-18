const mysql = require('mysql2');

// connect to a database peoplebook running on your localmachine
const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'YflN2UddSn',
    database: 'YflN2UddSn',
    password: 'xUEYbvTOWI'
});

module.exports = pool.promise();
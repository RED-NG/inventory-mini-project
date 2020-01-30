var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Fucktouch12',
      database: 'inventory_DB'
    });
  };

  connection.connect();
  module.exports = connection;
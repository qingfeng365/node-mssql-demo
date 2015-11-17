'use strict';

var sqlserver = require('mssql');


var sqlConfig = {
  user: 'sa',
  password: '19216802',
  server: '192.168.0.2\\sql2008',
  database: 'ESAutoCRM_810SP2-1'
};

var connection = new sqlserver.Connection(
  sqlConfig,
  function(err) {
    if (err) {
      console.log(err);
      return
    }
    var request = new sqlserver.Request(connection);
    // request.stream = true;
    var sql = 'select top 1 * from Pub_CarType1';

    request.query(sql, function(err, queryData) {
      if (err) {
        console.log(err);
      }
      console.dir(queryData.columns)
      console.dir(queryData);      
    });

    // request.on('recordset', function(columns) {
    //   console.log('on recordset: ')
    //   console.log(columns)
    // });

    // request.on('row', function(row) {
    //   console.log('on row: ')
    //   console.log(row)
    // });

    // request.on('error', function(err) {
    //   console.log('error:');
    //   console.log(err);
    // });

    connection.close();

  });

// connection.on('error', function(err) {
//   console.log(err);
// });













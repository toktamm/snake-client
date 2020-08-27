const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',           // '<IP ADDRESS HERE>'
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

console.log('Connecting ...');
connect();


module.exports = { connect };
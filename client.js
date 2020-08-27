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

  conn.on('connect', () => {
    //???we're using console.log instead of conn.on because the message is printed to the player????
    console.log('Successfully connected to game server');    
    conn.write('Name: TOK');
  });

  return conn;
};

console.log('Connecting ...');
connect();


module.exports = { connect };




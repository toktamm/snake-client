const net = require('net');

const {IP, PORT} = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,           // '<IP ADDRESS HERE>'
    port: PORT
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
    // conn.write('Move: up');
    // conn.write('Move: right');
    // conn.write('Move: down');
    // setTimeout(() => conn.write('Move: up'), 50);
    // setTimeout(() => conn.write('Move: up'), 100);
    //setInterval does not work
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50)
  });

  return conn;
};

//the following code shou;dn't be here and
// caused the game to have 2 snakes and receive each message twice
// console.log('Connecting ...');
// connect();


module.exports = { connect };




const net = require('net');

const { connect } = require('./client');

const {setupInput} = require('./input')

/**
 * Establishes connection with the game server
 */

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

setupInput();

/*
doubles the snkae and still WASD doesn't work
const conn = connect();
setupInput(conn);
*/

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    process.stdout.write('.');
  });

  return stdin;
}

// setupInput();   ???

module.exports = {setupInput};
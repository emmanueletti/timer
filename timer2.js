const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

// start user input
stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  // if user presses ctrl+c
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }

  // if user pressed 'b'
  if (key === '\u0062') {
    process.stdout.write('BEEP  ');
  }

  // if input is a number
  if (typeof Number(key) === 'number' && !isNaN(Number(key))) {
    console.log(`Setting timer for ${Number(key)} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('BEEP  ');
    }, Number(Number(key) * 1000));
  }
});

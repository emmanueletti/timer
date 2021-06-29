const alarms = process.argv.splice(2);

for (const alarm of alarms) {
  // check if alarm is positive and is a number
  if (alarm > 0 && !Number.isNaN(Number(alarm))) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('BEEP  ');
    }, Number(alarm * 1000));
  }
}

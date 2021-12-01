const beep = require('./node_modules/beepbeep');
const input = process.argv.slice(2);


for (let sec of input) {
  const time = Number(sec);
  if (time >= 0) {
    setTimeout(() => {
      //console.log('Iam aloud!');
      beep(3);
    }, time * 1000);
  }
}
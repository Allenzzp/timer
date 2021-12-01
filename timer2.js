const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on("data", (key) => {//only read one input or combined keys (ctrl + C)
 if(key === "\u0003") {
   console.log("Thanks for using me, ciao!");
   process.exit();
 } else if (key === "b") {
    console.log('Iam aloud!');
 } else if(Number(key) >0) {
   console.log(`setting timer for ${Number(key)} seconds..`);
   setTimeout(() => {
    console.log('Iam aloud!');
   }, Number(key) * 1000);
 }
});
setInterval(() => {

  let lines = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  let delay = 100;

  for (let i = 0; i < lines.length; i++) {
    delay += 200;
    setTimeout(() => {
      process.stdout.write(lines[i]);
    }, delay);
  }
}, 900);

//run 'node spinner.js' in the terminal 
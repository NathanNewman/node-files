// Step 3
// Copy over your step2.js code to step3.js.

// Add a feature where, on the command line, you can optionally provide an argument to output to a file instead
// of printing to the console. The argument should look like this: --out output-filename.txt readfile-or-url.

// Current features should still work the same:

// However, if --out follows your script name, it should take the next argument and use that as the path to write
// to.

const fs = require("fs");
const http = require("http");

function cat(path) {
  fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      console.log(`Error reading ${path}:`, error);
      process.kill(1);
    }
    console.log("DATA...", data);
  });
}

function webCat(path) {
  const request = http.request(path, (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => console.log(data));
  });
  request.on("error", (e) => console.log(e));
  request.end();
}

function catWrite(file, string) {
  fs.writeFile(file, string, { encording: "utf8", flag: "a" }, (error) => {
    if (error) {
      console.log(`Error writing to ${file}:`, error);
    }
    console.log(`${file} : ${string}`);
  });
}

if (process.argv.length <= 2) {
  console.error("Expected an argument!");
  process.exit(1);
}

const path = process.argv[2];
const file = process.argv[3];
const string = process.argv[4];
if (path.slice(0, 4) === "http") {
  webCat(path);
} else if (path === "--out") {
  catWrite(file, string);
} else {
  cat(path);
}

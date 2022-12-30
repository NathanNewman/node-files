// Step 2
// Copy over your step1.js code to step2.js

// Add a new function, webCat. This should take a URL and, using axios, should read the content of that URL
// and print it to the console.

// Modify the code that invoked cat so that, based on the command-line args, it decides whether the argument
// is a file path or a URL and calls either cat or webCat, respectively.

// If there is an error getting the page, it should print that.

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

if (process.argv.length === 2) {
    console.error("Expected an argument!");
    process.exit(1);
  }
  
const path = process.argv[2];
if (path.slice(0,4) === "http") {
    webCat(path);
}
else {
    cat(path);
}

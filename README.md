This is a class project where I created a program in node js that can read and write in the terminal. It can read a text file, get the HTML code of a website, append text to a file, or create a new file with text. The three js files are step1.js, step2.js, and step3.js. The file step3.js is the complete project where as step1.js and step2.js only contain the first parts that I wrote.

If the program is being run in WSL, it syntax is as follows:

(for reading text files)
node <path>
example: node one.txt

(for getting HTML code)
node <web address>
example: node 'http://www.google.com'

(for writing to files)
node --out <path> <string>
example: node two.txt 'This is a new file.'
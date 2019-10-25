const fs = require("fs");
const request = require("request");


const fetcher = function(args){
const url = process.argv[2]
const path = process.argv[3]

request(path, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the page.

  fs.writeFile('index.html', body, function (err) {
    if (err) throw err;
    console.log(`Downloaded & Saved 3261 to ${path}!`);
  });

});

//request (`$[url}`, (error, response, body) => {

//   fs.writeFile(`${path}`, body (err) => {
//     if (err) throw err;
//     console.log('Downloaded and Saved' + body.length + `bytes to ${path}`)
  
//    }
// };
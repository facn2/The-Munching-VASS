const fs = require('fs');
const pg = require('pg');
const querystring = require('querystring');
const data = require('./queries/data.js')

const handleHome = (response) => {
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
        if (error) {
          response.writeHead(500, 'Content-Type:text/html');
          response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
          console.log(error);
        } else {
          response.writeHead(200, {
              "Content-Type": "text/html"
          });
          
          response.end(file);
        }
    });   
}

const handleGetData = callback => {
	getData((error, response) => {
		if (error) {
			console.log(error)
		}
		const data = JSON.stringify(response);
		response.writeHead(200, {'Content-Type' : 'application/json'});
		response.end(data)
	})
}



// const handlePublic = (url, response) => {
// 	const extention = urlPublic.split('.')[1]; // taking the part of the file name which is the extention, i.e. "css".
// 	const extentionType = { //object of the differnet types of files
//     html: 'text/html',
//     css: 'text/css',
//     js: 'application/javascript',
//     ico: 'image/x-icon',
//     png: 'image/png'
//   }
//   const filePathPublic = path.join(__dirname, '..', urlPublic); // define file path
//   fs.readFile(filePathPublic, (error, file) => { // read file and pass error first callback
//     if (error) { // if there is an error - print a 500 error message
//       response.writeHead(500, `Content-Type: text/html`);
//       response.end(`<h1>Sorry, there is a problem with the server </h1>`);
//     } else { // if the call went through - serve the file
//       response.writeHead(200, `Content-Type: ${extentionType[extention]}`); // server the file that matches the type we are looking for
//       response.end(file); // serve the file
//     }
//   })
// }

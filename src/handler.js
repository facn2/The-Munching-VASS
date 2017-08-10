const http = require('http');
const fs = require('fs');
const pg = require('pg');
const path = require('path');
const datajs = require('./queries/data.js');

const handleHome = (request, response) => {
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

const handlePublic = (request, response) => {
  const extention = request.url.split('.')[1]; // taking the part of the file name which is the extention, i.e. "css".
  const extentionType = { //object of the differnet types of files
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    png: 'image/png'
  }
  const filePathPublic = path.join(__dirname, '..', request.url); // define file path
  fs.readFile(filePathPublic, (error, file) => { // read file and pass error first callback
    if (error) { // if there is an error - print a 500 error message
      response.writeHead(500, 'Content-Type: text/html');
      response.end('<h1>Sorry, there is a problem with the server</h1>');
    } else { // if the call went through - serve the file
      response.writeHead(200, `Content-Type: ${extentionType[extention]}`); // server the file that matches the type we are looking for
      response.end(file); // serve the file
    }
  })
}

const getCookingData = (request, response) => {
    datajs.fetchCookingData((err, res) => {
      if (err) {
        return console.log(`Error querying cooking database.`);
      }
      const tableCooking = JSON.stringify(res);
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(tableCooking);
    })

}

const getPeopleData = (request, response) => {

    datajs.fetchPeopleData((err, res) => {
      if (err) {
        return console.log(`Error querying people database.`);
      }
      const tablePeople = JSON.stringify(res);
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(tablePeople);
    })
}

const updateTable = (request, response) => {
  let update = '';
  request.on('data', (chunk) => {
    update += chunk;
  })

  request.on('end', () => {

    datajs.updateData(update, (err, res) => {
      if (err) {
        return console.log('Error adding the data');
      }
      response.writeHead(301, {"Location": "/"});
      response.end();
    });
  })
}

module.exports = {
  handleHome,
  handlePublic,
  getCookingData,
  getPeopleData,
  updateTable
}
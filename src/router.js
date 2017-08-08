const handler = require('handler');
const pg = require('pg');
const fs = require('fs');
const querystring = require('querystring');
const data = require('./queries/data.js')


const router = (request, response) => {
	const url = request.url.split('/')[1];

	if (url === ''){
		handler.handleHome
	} else if (url === 'public') {
		handler.handlePublic
	} else if (url === 'calendar') {
		handler.getData
	} else if (url === 'addchef') {
	 	handler.addChef
	} else if (url === 'addsouschef') {
	 	handler.addSousChef
	} else if (url === 'addmeal') {
	 	handler.addMeal
	} else if (url === 'addbudget') {
	 	handler.addBudget
	} else {

	}



 module.exports = router;

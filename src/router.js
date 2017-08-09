const handler = require('handler');


const router = (request, response) => {
	const url = request.url.split('/')[1];

	if (url === ''){
		handler.handleHome
	} else if (url === 'public') {
		handler.handlePublic
	} else if (url === 'calendar') {
		handler.getData
	} else if (url === '/updateCalendar') {
		handler.updateData
	}

	// else if (url === 'addchef') {
	//  	handler.addChef
	// } else if (url === 'addsouschef') {
	//  	handler.addSousChef
	// } else if (url === 'addmeal') {
	//  	handler.addMeal
	// } else if (url === 'addbudget') {
	//  	handler.addBudget
	} else {

	}



 module.exports = router;

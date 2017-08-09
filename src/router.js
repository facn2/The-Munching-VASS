const handler = require('./handler.js');


const router = (request, response) => {
	const url = request.url.split('/')[1];

	if (url === ''){
		handler.handleHome(response);
	} else if (url === 'public') {
		handler.handlePublic(request, response)
	} else if (url === 'get-data') {
		handler.getData();
	} else if (url === '/update-data') {
		handler.updateTable();
	}

	// else if (url === 'addchef') {
	//  	handler.addChef
	// } else if (url === 'addsouschef') {
	//  	handler.addSousChef
	// } else if (url === 'addmeal') {
	//  	handler.addMeal
	// } else if (url === 'addbudget') {
	//  	handler.addBudget
	else {

	}
}



 module.exports = router;

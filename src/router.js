const handler = require('./handler.js');


const router = (request, response) => {
	const url = request.url.split('/')[1];

	if (url === ''){
		handler.handleHome(request, response);
	} else if (url === 'public') {
		handler.handlePublic(request, response)
	} else if (url === 'get-cooking-data') {
		handler.getCookingData(request, response);
	} else if (url === 'get-people-data') {
		handler.getPeopleData(request, response);
	} else if (url === 'update-data') {
		handler.updateTable(request, response);
	}

}



 module.exports = router;

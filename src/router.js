const handler = require('./handler.js');


const router = (request, response) => {
	const url = request.url.split('/')[1];

	if (url === ''){
		handler.handleHome(request, response);
	} else if (url === 'public') {
		handler.handlePublic(request, response)
	} else if (url === 'get-data') {
		handler.getData(request, response);
	} else if (url === 'update-data') {
		handler.updateTable(request, response);
	}

}



 module.exports = router;

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
	} else {
		response.writeHead(404, {'Content-Type': 'text/html'});
		response.end('<h1>Error no</h1>')
	}

}



 module.exports = router;

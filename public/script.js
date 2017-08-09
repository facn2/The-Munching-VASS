var form = document.querySelector("#form");
var firstRow = document.querySelector("#firstRow")

var makeRequest = function(url, callback) {
	var dbCall = new XMLHttpRequest();
	dbCall.onreadystatechange = function () {
		if (dbCall.readyState === 4 && dbCall.status === 200) {
			if (dbCall.responseText) {
				callback(null, dbCall.responseText);
				console.log("dbcall stuff" + dbCall.responseText);
			}
		} else {
			callback('error' + dbCall.responseType);
		}
	}
    dbCall.open("GET", url, true);
    dbCall.send();
}

var updateDom = function(err, data) {
	if (err) {
		console.log('Yikes error again blah');
	}
	const dataObj = JSON.parse(data);
	console.log("dataobj ", dataObj);

	dataObj.forEach(function(dataObj) {
		var day = dataObj.day;
		var cellDay = firstRow.cells[0];
		cellDay.innerHTML = day;

		var chef = dataObj.chef_id;
		var cellChef = firstRow.cells[1];
		cellChef.innerHTML = chef;
		console.log('chef: ', chef);

		var sousChef = dataObj.sous_chef_id;
		var cellSousChef = firstRow.cells[2];
		cellSousChef.innerHTML = sousChef;

		var meal = dataObj.meal;
		var cellMeal = firstRow.cells[3];
		cellMeal.innerHTML = meal;

		var budget = dataObj.budget;
		var cellBudget = firstRow.cells[4];
		cellBudget.innerHTML = budget;

		//for attending, assuming that list of people within their own object
		// var attending = dataObj.attending
		// var cellAttending = firstRow.cells[5]
	})
}

makeRequest('get-data', updateDom)

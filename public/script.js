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

		var sousChef = dataObj.sous_chef_id;
		var cellSousChef = firstRow.cells[2];
		cellSousChef.innerHTML = sousChef;

		var meal = dataObj.meal;
		var cellMeal = firstRow.cells[3];
		cellMeal.innerHTML = meal;

		var budget = dataObj.budget;
		var cellBudget = firstRow.cells[4];
		cellBudget.innerHTML = budget;
	})
}


var peopleSelect = function(err, data) {
	if (err) {
		console.log('Yikes error again blah');
	}
	const peopleObj = JSON.parse(data);
	console.log("peopleObj ", peopleObj);

	peopleObj.forEach(function(peopleObj) {
		var selectChef = document.querySelector('#chef');
		var optionChef = document.createElement('option');
		optionChef.innerHTML = peopleObj.name;
		selectChef.appendChild(optionChef);

		var selectSousChef = document.querySelector('#sousChef');
		var optionSousChef = document.createElement('option');
		optionSousChef.innerHTML = peopleObj.name;
		selectSousChef.appendChild(optionSousChef);

		var selectParticipants = document.querySelector('#participants');
		var optionParticipants = document.createElement('option');
		optionParticipants.innerHTML = peopleObj.name;
		selectParticipants.appendChild(optionParticipants);

	})
}

makeRequest('get-cooking-data', updateDom)
makeRequest('get-people-data', selectDom)
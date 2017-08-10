alert('Dinner is Ready!');

var makeRequest = function(url, callback) {
	var dbCall = new XMLHttpRequest();
	dbCall.onreadystatechange = function () {
		if (dbCall.readyState === 4 && dbCall.status === 200) {
			if (dbCall.responseText) {
				callback(null, dbCall.responseText);
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
	var cookingObj = JSON.parse(data);
	var table = document.querySelector('#table')

	cookingObj.forEach(function(cookingObj) {
		var row = document.createElement('tr');
		row.setAttribute('class', 'row');

		Object.values(cookingObj).forEach(function(value) {
			var column = document.createElement('td');
			column.innerHTML = value;
			row.appendChild(column);
		})

		table.appendChild(row)
	})
}


var peopleDom = function(err, data) {
	if (err) {
		console.log('Yikes error again blah');
	}
	var peopleObj = JSON.parse(data);

	peopleObj.forEach(function(peopleObj) {
		var selectChef = document.querySelector('#chef');
		var optionChef = document.createElement('option');
		optionChef.innerHTML = peopleObj.name;
		selectChef.appendChild(optionChef);

		var selectSousChef = document.querySelector('#sousChef');
		var optionSousChef = document.createElement('option');
		optionSousChef.innerHTML = peopleObj.name;
		selectSousChef.appendChild(optionSousChef);
	})
}

makeRequest('get-cooking-data', updateDom);
makeRequest('get-people-data', peopleDom);
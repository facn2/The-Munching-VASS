var form = document.querySelector("#form");

var makeRequest = function(url, callback) {
	var dbCall = new XMLHttpRequest();
	dbCall.onreadystatechange = function () {
		if (dbCall.readyState === 4 && dbCall.status === 200) {
			callback(null, dbCall.responseText);
		} else {
			callback('error' + dbCall.responseType);
		}
	}
    dbCall.open("GET", url, true);
    dbCall.send();
}

makeRequest('/calendar', callback//replace later);

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
	

	makeRequest('updateCalendar', callback)
});
const dbConnection = require('../database/db_connection')

const getData = callback => {
	const currentTable = 'SELECT * FROM cooking'
	dbConnection.query(currentTable, (err, res) => {
		if (err) {
			return callback(err);
		}
		console.log('res.rows: ', res.rows);
		callback(null, res.rows);
	})
}

const updateData = (data, callback) => {
	const date = querystring.parse(data).date;
	const chef = querystring.parse(data).chef;
	const souschef = querystring.parse(data).souschef;
	const meal = querystring.parse(data).meal;
	const budget = querystring.parse(data).budget;
	// const participants = querystring.parse(data).participants;
	console.log('date: ', date, 'chef: ', chef, 'souschef: ', souschef, 'meal: ', meal, 'budget: ', budget, 'participants: ', participants);
	const updateQuery = 'INSERT INTO cooking (date, chef, souschef, meal, budget) VALUES ($1, $2, $3, $4, $5)';
	dbConnection.query(updateQuery, [date, chef, souschef, meal, budget], (err, res) => {
		if (err) {
			return callback(err);
		}
		callback(null, res);
	})
}

const getPeople = callback => {
	
}



module.exports = {
	getData,
	updateData
}

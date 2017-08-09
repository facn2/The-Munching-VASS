const dbconnection = require('/db_connection')

const getData = callback => {
	const currentTable = 'SELECT * FROM cooking'

	dbconnection.query(error, response) {
		if (error) {
			console.log('Error retrieving data ;( ... I coding suck')
		}

		console.log(res.rows)
		callback(null, res.rows)
	}
}
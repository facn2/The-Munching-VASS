const dbConnection = require('../database/db_connection');
const querystring = require('querystring');

const fetchCookingData = (tableNameCooking, callback) => {
  const currentTableCooking = `SELECT * FROM cooking;`;

  dbConnection.query(currentTableCooking, (err, res) => {
    if (err) {
      return callback(err);
    }
    console.log(`res.rows: `, res.rows);
    callback(null, res.rows);
  })
}

const fetchPeopleData = (tableNamePeople, callback) => {
  const currentTablePeople = `SELECT name FROM people;`;
  dbConnection.query(currentTablePeople, (err, res) => {
    if (err) {
      return callback(err);
    }
    console.log(`res.rows: `, res.rows);
    callback(null, res.rows);
  })
}

const updateData = (data, callback) => {
  const day = querystring.parse(data).day;
  const chef = querystring.parse(data).chef;
  const souschef = querystring.parse(data).souschef;
  const meal = querystring.parse(data).meal;
  const budget = querystring.parse(data).budget;
  const updateQuery = 'INSERT INTO cooking(day, chef_id) VALUES ($1, $2);'
  // console.log(updateQuery)
  // const dataArray = [`'${day}'`, `'${chef}'`]
  dbConnection.query(updateQuery, [day, chef], (err, res) => {
    console.log('res', res)
    if (err) {
      return callback(err);
    }

    console.log('successful update')
    callback(null, res);
  })
}

module.exports = {
  fetchCookingData,
  fetchPeopleData,
  updateData
}
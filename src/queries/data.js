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
  
  const updateQuery = 'INSERT INTO cooking(day, chef, souschef, meal, budget) VALUES ($1, $2, $3, $4, $5);'
  const dataArray = [day, chef, souschef, meal, budget]
  dbConnection.query(updateQuery, dataArray, (err, res) => {
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
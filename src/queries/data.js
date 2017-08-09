const dbConnection = require('../database/db_connection');
const querystring = require('querystring');

const fetchData = (tableNameCooking, tableNamePeople, callback) => {
  const currentTableCooking = `SELECT * FROM cooking`;
  dbConnection.query(currentTableCooking, (err, res) => {
    if (err) {
      return callback(err);
    }
    console.log(`cooking.rows: `, res.rows);
    callback(null, res.rows);
  })
}

const updateData = (data, callback) => {
  const day = querystring.parse(data).day;
  const chef = querystring.parse(data).chef;
  const souschef = querystring.parse(data).souschef;
  const meal = querystring.parse(data).meal;
  const budget = querystring.parse(data).budget;
  // const participants = querystring.parse(data).participants;
  console.log('day: ', day, 'chef: ', chef, 'souschef: ', souschef, 'meal: ', meal, 'budget: ', budget, 'participants: ', participants);
  const updateQuery = 'INSERT INTO cooking (day, chef, souschef, meal, budget) VALUES ($1, $2, $3, $4, $5)';
  dbConnection.query(updateQuery, [day, chef, souschef, meal, budget], (err, res) => {
    if (err) {
      return callback(err);
    }
    callback(null, res);
  })
}

module.exports = {
  fetchData,
  updateData
}

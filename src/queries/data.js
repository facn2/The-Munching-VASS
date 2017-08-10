const dbConnection = require('../database/db_connection');
const querystring = require('querystring');

const fetchCookingData = (callback) => {
  const currentTableCooking = `SELECT cooking.day, chefcolumn.name AS chef, souschefcolumn.name AS souschef, cooking.meal, cooking.budget 
    FROM cooking 
    JOIN people chefcolumn ON chefcolumn.id = cooking.chef_id 
    JOIN people souschefcolumn ON souschefcolumn.id = cooking.sous_chef_id 
    ORDER BY cooking.day_of_week`;

  dbConnection.query(currentTableCooking, (err, res) => {
    if (err) {
      return callback(err);
    }

    callback(null, res.rows);
  })
}

const fetchPeopleData = (callback) => {
  const currentTablePeople = `SELECT name FROM people;`;
  dbConnection.query(currentTablePeople, (err, res) => {
    if (err) {
      return callback(err);
    }
    callback(null, res.rows);
  })
}

const updateData = (data, callback) => {
  parsedData = querystring.parse(data);
  const day = parsedData.day;
  const chef = parsedData.chef;
  const souschef = parsedData.souschef;
  const meal = parsedData.meal;
  const budget = parsedData.budget;
  const participants = parsedData.participants;

  const updateQuery = `UPDATE cooking SET chef_id=(SELECT id 
  FROM people WHERE name=$1), sous_chef_id=(SELECT id 
  FROM people WHERE name=$2), meal=$3, budget=$4 WHERE day=$5`;

  const post = [chef, souschef, meal, budget, day];

  dbConnection.query(updateQuery, post, (err, res) => {
    if (err) {
      return callback(err);
    }
    console.log('1 record inserted!');
    callback(null, res);
  })
}

module.exports = {
  fetchCookingData,
  fetchPeopleData,
  updateData
}
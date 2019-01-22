const mysql = require('mysql');
const settings = require('./dbSettings.json');

const db = mysql.createConnection(settings);

module.exports = db;

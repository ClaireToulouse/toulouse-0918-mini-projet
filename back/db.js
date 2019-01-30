const mysql = require('mysql');
const util = require('util');
const settings = require('./dbSettings.json');

const db = mysql.createConnection(settings);

db.queryAsync = util.promisify(db.query.bind(db));

module.exports = db;

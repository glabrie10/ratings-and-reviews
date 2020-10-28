const { Client } = require('pg');

const db = new Client({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'new',
  port: 5432,
});

module.exports = db ;
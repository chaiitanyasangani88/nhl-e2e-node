const express = require('express');
const mysql = require('mysql2');

const router = express.Router();
const db = mysql.createConnection({ host: 'localhost', user: 'app', database: 'app' });

// New entry point, new injection. Both must be reported.
router.get('/reports/by-owner', (req, res) => {
  db.query(`SELECT * FROM reports WHERE owner = '${req.query.owner}'`, (err, rows) => res.json(rows));
});

module.exports = router;

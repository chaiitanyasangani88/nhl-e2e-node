const express = require('express');
const mysql = require('mysql2');

const app = express();
const db = mysql.createConnection({ host: 'localhost', user: 'app', database: 'app' });

// Pre-existing and deliberately vulnerable. A pull request that does not touch
// this file must NOT report it — that is the whole point of the delta gate.
app.get('/legacy/search', (req, res) => {
  db.query(`SELECT * FROM items WHERE name = '${req.query.q}'`, (err, rows) => res.json(rows));
});

app.get('/health', (_req, res) => res.json({ ok: true }));

module.exports = app;

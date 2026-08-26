const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const db = mysql.createConnection({ host: 'localhost' });

// Identical to PR 2's injection. Targeting an unconfigured base branch must
// produce NO scan at all — not a scan that finds it.
router.get('/sandbox/search', (req, res) => {
  db.query(`SELECT * FROM t WHERE q = '${req.query.q}'`, (e, r) => res.json(r));
});
module.exports = router;

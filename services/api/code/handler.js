const mysql = require('mysql2');
const db = mysql.createConnection({ host: 'localhost' });

// Every finding under a directory named "code" was once silently suppressed,
// because the path canonicaliser stripped through "/code/" on both sides.
function lookup(req, res) {
  db.query(`SELECT * FROM users WHERE email = '${req.query.email}'`, (e, r) => res.json(r));
}
module.exports = { lookup };

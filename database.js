const Database = require('better-sqlite3');
const db = new Database('users.db');

db.exec(
  'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE NOT NULL, password TEXT NOT NULL)',
);

function findUser(email) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}

function saveUser({ email, password }) {
  db.prepare('INSERT INTO users (email, password) VALUES (?, ?)').run(
    email,
    password,
  );
}

module.exports = { findUser, saveUser };

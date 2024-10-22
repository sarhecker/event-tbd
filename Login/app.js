const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Create or open the database
const db = new sqlite3.Database('./users.db');

// Create the users table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`);

app.use(express.json());

// Sign up endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  db.run(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    function (err) {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          return res.status(400).send('Username already exists');
        }
        return res.status(500).send('Error creating user');
      }

      res.status(201).send('User created successfully');
    }
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
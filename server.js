const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();
const path = require('path'); 

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'build')));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME
});

connection.connect(error => {
  if (error) throw error;
  console.log('Połączono z bazą danych.');
});

app.use((req, res, next) => {
  const csp = process.env.CSP_DIRECTIVES || "default-src 'self'; img-src 'self' https://arkadius-3ed504c5d94a.herokuapp.com/favicon.ico;";
  res.setHeader("Content-Security-Policy", csp);
  next();
});


app.get('/favicon.ico', (req, res) => res.status(204).send());


// Endpoint do dodawania zadania
app.post('/api/todos', (req, res) => {
  const { text, completed } = req.body;
  const query = 'INSERT INTO todos (text, completed) VALUES (?, ?)';
  
  connection.query(query, [text, completed], (error, results) => {
    if (error) throw error;
    res.status(201).send({ id: results.insertId, ...req.body });
  });
});

app.get('/api/todos', (req, res) => {
  const query = 'SELECT * FROM todos';
  connection.query(query, (error, results, fields) => {
    if (error) {
      res.status(500).send('Błąd serwera przy pobieraniu zadań');
    } else {
      res.status(200).json(results);
    }
  });
});


app.patch('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const query = 'UPDATE todos SET completed = ? WHERE id = ?';

  connection.query(query, [completed, id], (error, results) => {
    if (error) {
      res.status(500).send('Błąd serwera przy aktualizacji zadania');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Zadanie nie zostało znalezione');
    } else {
      res.status(200).send('Zadanie zostało zaktualizowane');
    }
  });
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM todos WHERE id = ?';

  connection.query(query, [id], (error, results) => {
    if (error) {
      res.status(500).send('Błąd serwera przy usuwaniu zadania');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Zadanie nie zostało znalezione');
    } else {
      res.status(200).send('Zadanie zostało usunięte');
    }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
const express = require('express');
const path = require('path');
const cards = require('./routes/cards');
const users = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use('/', cards);
app.use('/', users);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {});

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const users = require('./routes/users');
const cards = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

// connect to the MongoDB server
mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/users', users);
app.use('/cards', cards);
app.use((req, res, next) => {
  req.user = {
    _id: '609443f9d400cb5d04f45fb8',
  };

  next();
});

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {});

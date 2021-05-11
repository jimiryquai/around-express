const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
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

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '609443f9d400cb5d04f45fb8',
  };

  next();
});

app.use('/users', users);
app.use('/cards', cards);

app.get('*', (req, res) => res.status(404).send({ message: 'Requested Resource Not Found' }));

app.listen(PORT, () => {});

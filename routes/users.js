const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../data/users.json');

const getUsers = () => fs.readFile(dataPath, { encoding: 'utf8' });

// check whether the user exists
const doesUserExist = (req, res) => {
  getUsers()
    .then((users) => {
      const user = JSON.parse(users).find((u) => u._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: 'User ID not found' });
      } else {
        res.status(200).send(user);
      }
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

router.get('/', (req, res) => {
  getUsers()
    .then((users) => {
      res.status(200).send(JSON.parse(users));
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
});

router.get('/:id', doesUserExist);

module.exports = router;

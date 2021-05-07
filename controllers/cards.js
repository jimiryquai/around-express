const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send({ data: cards });
    })
    .catch(() => {
      res.status(500).send({ message: 'Internal Server Error' });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  console.log(req.user._id);

  Card.create({ name, link })
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Internal Server Error' }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Internal Server Error' }));
};

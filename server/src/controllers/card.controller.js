const { checkObjectIdIsValid } = require("../utils");
const Card = require('../models/card.model');

const getCards = async (options = {}) => Card.find(options);

const putCard = async card => {
  checkObjectIdIsValid(card);
  return new Card(card).save()
};

const postCards = async cards => {
  if (Array.isArray(cards)) {
    cards.forEach(card => {
      checkObjectIdIsValid(card);
      return new Card(card).save()
    })
  } else {
    checkObjectIdIsValid(cards);
    return new Card(cards).save()
  }
};

const updateCard = async (card) => Card.updateOne(
  {
    _id: card._id
  },
  {
    $set: {
      updatedDate: new Date(),
      previousStatus: card.status,
      previousAnswerDate: card.updatedDate,
    }
  }
);

const deleteCard = async (id) => Card.deleteOne({ _id: id });

module.exports = {
  getCards,
  putCard,
  postCards,
  updateCard,
  deleteCard,
};

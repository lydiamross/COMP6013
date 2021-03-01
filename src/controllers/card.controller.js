const { checkObjectIdIsValid } = require("../utils/checkObjectIdIsValid");
const Card = require('../models/card.model');
const Topic = require('../models/topic.model');

const getCards = async (options = {}) => Card.find(options);

const putCard = async card => {
  checkObjectIdIsValid(card);
  
  const newCard = await new Card(card).save();
  
  await Topic.updateOne(
    { _id: card.topicId },
    { $push: { cards: newCard._id } }
  );

  return card;
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

const updateCard = async (card) => Card.updateOne({
    _id: card._id
  },{
    $set: {
      updatedDate: new Date(),
      status: card.status,
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

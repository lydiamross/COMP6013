const Card = require('../models/card.model');
const Topic = require('../models/topic.model');

const getCards = async (request, response) => Card
  .find()
  .then((cards) => response.status(200).send(cards))
  .catch((error) => response.status(400).send(error));

const getCardsByTopicId = async (request, response) => Card
  .find(request.params)
  .then((cards) => response.status(200).send(cards))
  .catch((error) => response.status(400).send(error));

const putCard = async (request, response) => {
  const newCard = await Card.findOneAndUpdate({
    _id: request.params.id
  }, {
    $set: Object.assign(request.body, { updatedDate: new Date() })
  }, {
    upsert: true,
    returnOriginal: false
  })
    .then((card) => response.status(200).send(card))
    .catch((error) => response.status(400).send(error));

  await Topic.updateOne({
    _id: newCard.topicId,
  },
  {
    $set: {
      updatedDate: new Date(),
      dateToNextBeRevised: newCard.dateToNextBeRevised
    },
    $push: { cards: newCard._id }
  });
};

const postCards = async (request, response) => {
  const newCards = Array.isArray(request.body) ? request.body : [request.body];
  newCards.forEach((card) => {
    new Card(card)
      .save()
      .then(async (newCard) => {
        await Topic.updateOne({
          _id: newCard.topicId,
        },
        {
          $set: {
            updatedDate: new Date(),
            dateToNextBeRevised: newCard.dateToNextBeRevised
          },
          $push: { cards: card._id }
        });

        return response.status(201).send(newCard);
      })
      .catch((error) => response.status(400).send(error));
  });
};

const updateCard = async (request, response) => Card
  .updateOne(
    {
      _id: request.body._id
    }, {
      $set: Object.assign(request.body, { updatedDate: new Date() })
    }
  )
  .then((res) => {
    if (res.nModified === 1) {
      return response.status(200).send({ success: res.nModified });
    }
    return response.status(404).send('Error - card not modified');
  })
  .catch((error) => response.status(400).send(error));

const deleteCard = async (request, response) => Card
  .deleteOne({ _id: request.params.id })
  .then((res) => {
    if (res.deletedCount === 1) {
      return response.status(204).send();
    }
    return response.status(404).send('Error - card not deleted');
  })
  .catch((error) => response.status(400).send(error));

module.exports = {
  getCards,
  getCardsByTopicId,
  putCard,
  postCards,
  updateCard,
  deleteCard,
};

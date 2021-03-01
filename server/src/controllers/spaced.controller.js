const moment = require('moment');
const Topic = require('../models/topic.model')
const Card = require('../models/card.model')

const spacedInterval = {
  UNSURE: 1,
  NEUTRAL: 5,
  CONFIDENT: 10,
  RETIRED: 30
};

const getNewDate = (status) => {
  switch (status) {
    case 'unsure':
      return moment().add(spacedInterval.UNSURE, 'days');
    case 'neutral':
      return moment().add(spacedInterval.NEUTRAL, 'days');
    case 'confident':
      // TODO: Check for if last revision was confident
      return moment().add(spacedInterval.CONFIDENT, 'days');
    default:
      return new Date();
  };
}

const updateSpaced = async (body) => {
  /*
  1. From clicked on status, get nextDateToBeRevised
  2. Update card
        - When the user clicks on 'I don't remember this at all', the card moves to needs revision
        - When the user clicks on 'I barely know this', the card stays in its current box - status stays the same
        - When the user clicks on 'I'm confident I know this', the card moves down a status that is more confident. to middle box which is neutral
  3. Update topic
        - Get the associated topic
        - If the topic's nextRevisionDate is after the next card revision date, then update the revision date
  */
  
  const card = await Card.findOne({ _id: body._id });
  
  const cardNextDate = getNewDate(body.status);
  
  const updatedCard = await Card.updateOne({
    _id: card._id
  }, {
    $set: {
      updatedDate: new Date(),
      status: card.status,
      dateToNextBeRevised: cardNextDate,
    }
  })
  
  /*
  This says:
    Find the topic where:
      the id matches the card's topic id AND
      the topic's dateToNextBeRevised is more than the card's dateToNextBeRevised AND
      the topic's dateToNextBeRevised is less than today
    Then
      update the revision date
  */
  
  const updatedTopic = await Topic.updateOne({
    _id: card.topicId,
    $and: [
      {
        dateToNextBeRevised: {
          $gt: Date(cardNextDate),
        },
        dateToNextBeRevised: {
          $lt: new Date()
        }
      }
    ]
  }, {
    $set: {
      dateToNextBeRevised: cardNextDate,
    }
  });

  return {
    card: updatedCard,
    topic: updatedTopic
  }
};


module.exports = {
  updateSpaced: updateSpaced,
};

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
      return moment().add(spacedInterval.CONFIDENT, 'days');
    default:
      return new Date();
  };
}

const updateSpacedInterval = async (body) => {
  /*
  Update card:
    When the user clicks on 'I don't remember this at all', the card has fewer number of days added
    When the user clicks on 'I barely know this', the card has neutral number of days added
    When the user clicks on 'I'm confident I know this', the card has greater number of days added
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
  Update topic:
    Find the topic where:
      the id matches the card's topic id AND
      the topic's dateToNextBeRevised is after the card's dateToNextBeRevised OR
      the topic's dateToNextBeRevised is before today
    Then
      update the revision date
  */

  const updatedTopic = await Topic.updateOne({
    _id: card.topicId,
    $or: [
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
      dateToNextBeRevised: cardNextDate.toISOString(),
    }
  });

  return {
    card: updatedCard,
    topic: updatedTopic
  }
};

module.exports = {
  updateSpacedInterval: updateSpacedInterval,
};

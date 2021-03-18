/* eslint-disable consistent-return */
const { checkObjectIdIsValid } = require('../utils/checkObjectIdIsValid');
const Topic = require('../models/topic.model');

const getTopics = async (request, response) => Topic
  .find()
  .then((topics) => response.status(200).send(topics))
  .catch((error) => response.status(400).send(error));

const getTopicById = async (request, response) => Topic
  .findOne({ _id: request.params.id })
  .then((topic) => response.status(200).send(topic))
  .catch((error) => response.status(400).send(error));

const putTopic = async (request, response) => {
  checkObjectIdIsValid({ _id: request.params.id });

  await Topic.findOneAndUpdate({
    _id: request.params.id
  }, {
    $set: Object.assign(request.body, { updatedDate: new Date() })
  }, {
    upsert: true,
    returnOriginal: false
  })
    .then((topic) => response.status(200).send(topic))
    .catch((error) => response.status(400).send(error));
};

const postTopics = async (request, response) => {
  const newTopics = Array.isArray(request.body) ? request.body : [request.body];
  newTopics.forEach((topic) => {
    checkObjectIdIsValid(topic);
    return new Topic(topic)
      .save()
      .then((createdTopic) => response.status(201).send(createdTopic))
      .catch((error) => response.status(400).send(error));
  });
};

const updateTopic = async (request, response) => Topic
  .updateOne(
    {
      _id: request.body._id
    }, {
      $set: Object.assign(request.body, { updatedDate: new Date() })
    }
  )
  .then(() => response.status(200).send())
  .catch((error) => response.status(400).send(error));

const deleteTopic = async (request, response) => Topic
  .deleteOne({ _id: request.params.id })
  .then(() => response.status(204).send())
  .catch((error) => response.status(400).send(error));

module.exports = {
  getTopics,
  getTopicById,
  putTopic,
  postTopics,
  updateTopic,
  deleteTopic,
};

/* eslint-disable consistent-return */
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
  newTopics.forEach((topic) => new Topic(topic)
    .save()
    .then((createdTopic) => response.status(201).send(createdTopic))
    .catch((error) => response.status(400).send(error)));
};

const updateTopic = async (request, response) => Topic
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
    return response.status(404).send('Error - topic not modified');
  })
  .catch((error) => response.status(400).send(error));

const deleteTopic = async (request, response) => Topic
  .deleteOne({ _id: request.params.id })
  .then((res) => {
    if (res.deletedCount === 1) {
      return response.status(204).send();
    }
    return response.status(404).send('Error - topic not deleted');
  })
  .catch((error) => response.status(400).send(error));

module.exports = {
  getTopics,
  getTopicById,
  putTopic,
  postTopics,
  updateTopic,
  deleteTopic,
};

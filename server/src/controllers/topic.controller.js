const { checkObjectIdIsValid } = require("../utils");
const Topic = require('../models/topic.model');

const getTopics = async (options = {}) => Topic.find(options);

const getTopicById = async (id) => {
  const card = Topic.findOne({ _id: id });
  return card;
};

const putTopic = async topic => {
  checkObjectIdIsValid(topic);
  return new Topic(topic).save()
};

const postTopics = async topics => {
  if (Array.isArray(topics)) {
    topics.forEach(topic => {
      checkObjectIdIsValid(topic);
      return new Topic(topic).save()
    })
  } else {
    checkObjectIdIsValid(topic);
    return new Topic(topic).save()
  }
};

const deleteTopic = async (id) => Topic.deleteOne({ _id: id });

module.exports = {
  getTopics,
  getTopicById,
  putTopic,
  postTopics,
  deleteTopic,
};
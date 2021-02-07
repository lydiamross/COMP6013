/* eslint-disable no-underscore-dangle */
const db = require('../db');

exports.getCardsByTopicIdApi = async (req, res) => {
  try {
    const cards = await db.getCards({ topicId: req.params.topicId });
    res.json(cards);
  } catch(error) {
    throw new Error(err);
  }
};

exports.getCardsApi = async (req, res) => {
  const cards = await db.getCards();
  res.json(cards);
};

exports.getTopicsApi = async (req, res) => {
  const topics = await db.getTopics();
  res.json(topics);
};

exports.getTopicByIdApi = async (req, res) => {
  const topic = await db.getTopicById(req.params.id);
  res.json(topic);
};

exports.putCardApi = async (req, res) => {
  const topic = await db.putCard(req.body);
  res.json(topic);
};

exports.putTopicApi = async (req, res) => {
  const topic = await db.putTopic(req.body);
  res.json(topic);
};

exports.postCardsApi = async (req, res) => {
  const cards = await db.postCards(req.body);
  res.json(cards);
};

exports.postTopicsApi = async (req, res) => {
  const topics = await db.postTopics(req.body);
  res.json(topics);
};

exports.notFound = (req, res) => res.render('404');

// eslint-disable-next-line no-unused-vars
exports.serverError = (err, req, res, next) => res.render('500');

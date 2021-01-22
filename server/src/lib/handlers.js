/* eslint-disable no-underscore-dangle */
const db = require('../db');

exports.home = (req, res) => res.render('home');

exports.about = (req, res) => res.render('about');

exports.listTopics = async (req, res) => {
  const topics = await db.getTopics();
  const context = {
    topics: topics.map((topic) => ({
      _id: topic.id,
      createdDate: topic.createdDate,
      name: topic.name,
      description: topic.description,
      cards: `${topic.cards.join(', ')}`
    })),
  };
  res.render('topic', context);
};

exports.listCards = async (req, res) => {
  const cards = await db.getCards();
  const context = {
    cards: cards.map((card) => ({
      _id: card._id,
      createdDate: card.createdDate,
      updatedDate: card.updatedDate,
      type: card.type,
      topicId: card.topicId,
      question: card.question,
      answer: card.answer,
      previousStatus: card.previousStatus,
      previousAnswerDate: card.previousAnswerDate,
    })),
  };
  res.render('card', context);
};

exports.account = (req, res) => res.render('account');

exports.getCardsApi = async (req, res) => {
  const cards = await db.getCards();
  res.json(cards);
};

exports.getTopicsApi = async (req, res) => {
  const topics = await db.getTopics();
  res.json(topics);
};

exports.getCardByIdApi = async (req, res) => {
  const card = await db.getCardById(req.params._id);
  res.json(card);
};

exports.getTopicByIdApi = async (req, res) => {
  const topic = await db.getTopicById(req.params.id);
  res.json(topic);
};

exports.notFound = (req, res) => res.render('404');

// eslint-disable-next-line no-unused-vars
exports.serverError = (err, req, res, next) => res.render('500');

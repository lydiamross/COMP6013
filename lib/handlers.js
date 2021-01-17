const db = require('../db');

exports.home = (req, res) => res.render('home');

exports.about = (req, res) => res.render('about');

exports.listTopics = async (req, res) => {
  const topics = await db.getTopics();
  const context = {
    topics: topics.map((topic) => ({
      id: topic.id,
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
      id: card.id,
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

exports.notFound = (req, res) => res.render('404');

// eslint-disable-next-line no-unused-vars
exports.serverError = (err, req, res, next) => res.render('500');

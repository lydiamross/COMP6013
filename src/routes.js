var express = require('express');
const cardController = require('./controllers/card.controller');
const topicController = require('./controllers/topic.controller');

var router = express.Router();

router.get('/topics', async (req, res) => {
  const topics = await topicController.getTopics();
  res.json(topics);
});

router.get('/topics/:id', async (req, res) => {
  const topic = await topicController.getTopicById(req.params.id);
  res.json(topic);
});

router.post('/topics', async (req, res) => {
  const topics = await topicController.postTopics(req.body);
  res.json(topics);
});

router.put('/topics', async (req, res) => {
  const topic = await topicController.putTopic(req.body);
  res.json(topic);
});

router.patch('/topics', async (req, res) => {
  const topic = await topicController.updateTopic(req.body);
  res.json(topic);
});

router.delete('/topics/:id', async (req, res) => {
  const topic = await topicController.deleteTopic(req.params.id);
  res.json(topic);
});

router.get('/cards', async (req, res) => {
  const cards = await cardController.getCards();
  res.json(cards);
});

router.get('/cards/:topicId', async (req, res) => {
  const cards = await cardController.getCards({ topicId: req.params.topicId });
  res.json(cards);
});

router.post('/cards', async (req, res) => {
  const cards = await cardController.postCards(req.body);
  res.json(cards);
});

router.put('/cards', async (req, res) => {
  const card = await cardController.putCard(req.body);
  res.json(card);
});

router.patch('/cards', async (req, res) => {
  const card = await cardController.updateCard(req.body);
  res.json(card);
});

router.delete('/cards/:id', async (req, res) => {
  const card = await cardController.deleteCard(req.params.id);
  res.json(card);
});

module.exports = router;

var express = require('express');
const cardController = require('./controllers/card.controller');
const topicController = require('./controllers/topic.controller');
const spacedController = require('./controllers/spaced.controller');

var router = express.Router();

router.get('/topics', async (request, response) => {
  const topics = await topicController.getTopics();
  response.json(topics);
});

router.get('/topics/:id', async (request, response) => {
  const topic = await topicController.getTopicById(request.params.id);
  response.json(topic);
});

router.post('/topics', async (request, response) => {
  const topics = await topicController.postTopics(request.body);
  response.json(topics);
});

router.put('/topics', async (request, response) => {
  const topic = await topicController.putTopic(request.body);
  response.json(topic);
});

router.patch('/topics', async (request, response) => {
  const topic = await topicController.updateTopic(request.body);
  response.json(topic);
});

router.delete('/topics/:id', async (request, response) => {
  const topic = await topicController.deleteTopic(request.params.id);
  response.json(topic);
});

router.get('/cards', async (request, response) => {
  const cards = await cardController.getCards();
  response.json(cards);
});

router.get('/cards/:topicId', async (request, response) => {
  const cards = await cardController.getCards({ topicId: request.params.topicId });
  response.json(cards);
});

router.post('/cards', async (request, response) => {
  const cards = await cardController.postCards(request.body);
  response.json(cards);
});

router.put('/cards', async (request, response) => {
  const card = await cardController.putCard(request.body);
  response.json(card);
});

router.patch('/cards', async (request, response) => {
  const card = await cardController.updateCard(request.body);
  response.json(card);
});

router.delete('/cards/:id', async (request, response) => {
  const card = await cardController.deleteCard(request.params.id);
  response.json(card);
});

router.patch('/spaced', async (request, response) => {
  const both = await spacedController.updateSpaced(request.body);
  response.json(both);
});

module.exports = router;

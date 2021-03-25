const express = require('express');
const cardController = require('./controllers/card.controller');
const topicController = require('./controllers/topic.controller');
const spacedController = require('./controllers/spaced.controller');

const router = express.Router();

router.get('/topics', topicController.getTopics);
router.get('/topics/:id', topicController.getTopicById);
router.post('/topics', topicController.postTopics);
router.put('/topics/:id', topicController.putTopic);
router.patch('/topics', topicController.updateTopic);
router.delete('/topics/:id', topicController.deleteTopic);

router.get('/cards', cardController.getCards);
router.get('/cards/:topicId', cardController.getCardsByTopicId);
router.post('/cards', cardController.postCards);
router.put('/cards/:id', cardController.putCard);
router.patch('/cards', cardController.updateCard);
router.delete('/cards/:id', cardController.deleteCard);

router.patch('/spaced', spacedController.updateSpacedInterval);

module.exports = router;

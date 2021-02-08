const cardController = require('./controllers/card.controller');
const topicController = require('./controllers/topic.controller');

module.exports = (app) => {
  app.get('/api/topics', async (req, res) => {
    const topics = await topicController.getTopics();
    res.json(topics);
  });

  app.get('/api/topics/:id', async (req, res) => {
    const topic = await topicController.getTopicById(req.params.id);
    res.json(topic);
  });

  app.post('/api/topics', async (req, res) => {
    const topics = await topicController.postTopics(req.body);
    res.json(topics);
  });

  app.put('/api/topics', async (req, res) => {
    const topic = await topicController.putTopic(req.body);
    res.json(topic);
  });

  app.delete('/api/topics/:id', async (req, res) => {
    const topic = await topicController.deleteTopic(req.params.id);
    res.json(topic);
  });

  app.get('/api/cards', async (req, res) => {
    const cards = await cardController.getCards();
    res.json(cards);
  });

  app.get('/api/cards/:topicId', async (req, res) => {
    const cards = await cardController.getCards({ topicId: req.params.topicId });
    res.json(cards);
  });
  
  app.post('/api/cards', async (req, res) => {
    const cards = await cardController.postCards(req.body);
    res.json(cards);
  });
  
  app.put('/api/cards', async (req, res) => {
    const topic = await cardController.putCard(req.body);
    res.json(topic);
  });
  
  app.delete('/api/cards/:id', async (req, res) => {
    const card = await cardController.deleteCard(req.params.id);
    res.json(card);
  });
};

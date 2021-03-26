const bodyParser = require('body-parser');
const express = require('express');
const moment = require('moment');
const mongoose = require('mongoose');
const request = require('supertest');
const CardModel = require('../models/card.model');
const TopicModel = require('../models/topic.model');
const apiRoutes = require('../routes');

describe('REST API models test', () => {
  const testApp = express();
  testApp.use(bodyParser.json({ limit: '100kb' }));
  testApp.use('/api', apiRoutes);
  const api = () => request(testApp);

  const exampleTopic = { name: 'Example topic name', description: 'Example topic description' };
  const exampleCard = { question: 'Example question', answer: 'Example answer' };

  beforeAll(async () => {
    await mongoose.connect(
      'mongodb://127.0.0.1/test',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });

  afterAll(async (done) => {
    await mongoose.disconnect();
    done();
  });

  afterEach(async (done) => {
    await TopicModel.deleteMany({});
    await CardModel.deleteMany({});
    done();
  });

  describe('Topic model', () => {
    it('should get a list of topics via GET /topics', async () => {
      await api()
        .post('/api/topics')
        .send(exampleTopic);

      const response = await api()
        .get('/api/topics')
        .expect(200);

      expect(response.body.length).not.toBe(0);
      expect(response.body[0].name).toBe(exampleTopic.name);
      expect(response.body[0].description).toBe(exampleTopic.description);
      expect(response.body[0]._id).toBeDefined();
    });

    it('should get a specific topic via GET /topics/:id', async () => {
      const newTopic = await api()
        .post('/api/topics')
        .send(exampleTopic);

      const response = await api()
        .get(`/api/topics/${newTopic.body._id}`)
        .expect(200);

      expect(response.body.name).toBe(exampleTopic.name);
      expect(response.body.description).toBe(exampleTopic.description);
      expect(response.body._id).toBeDefined();
    });

    it('should create a topic via PUT /topics/:id', async () => {
      const _id = 'a266488f577495b2805bf474';
      await api()
        .put(`/api/topics/${_id}`)
        .send(exampleTopic)
        .expect(200);
    });

    it('should not create a new topic via PUT /topics/:id when id already exists', async () => {
      const _id = 'a266488f577495b2805bf474';
      const newTopicBody = { name: 'A different topic name' };

      await api()
        .put(`/api/topics/${_id}`)
        .send(exampleTopic)
        .expect(200);

      await api()
        .put(`/api/topics/${_id}`)
        .send(newTopicBody)
        .expect(200);

      const topic = await api()
        .get('/api/topics')
        .expect(200);

      expect(topic.body[0].name).toBe(newTopicBody.name);
      expect(topic.body[0].description).toBe(exampleTopic.description);
    });

    it('should create a topic via POST /topics', async () => {
      const response = await api()
        .post('/api/topics')
        .send(exampleTopic)
        .expect(201);

      expect(response.body.name).toBe(exampleTopic.name);
      expect(response.body.description).toBe(exampleTopic.description);
      expect(response.body._id).toBeDefined();
    });

    it('should not create a new invalid topic via POST /topics', async () => {
      try {
        await api()
          .post('/api/topics')
          .send({ description: 'A test description' });
      } catch (error) {
        expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      }
    });

    it('should update a topic via PATCH /topics', async () => {
      const _id = 'a266488f577495b2805bf474';
      await api()
        .post('/api/topics')
        .send(Object.assign(exampleTopic, { _id }))
        .expect(201);

      const update = {
        _id,
        description: 'Updated test description',
      };

      const response = await api()
        .patch('/api/topics')
        .send(update)
        .expect(200);

      expect(response.body.success).toEqual(1);
    });

    it('should not update a topic via PATCH /topics without specificed id', async () => {
      await api()
        .post('/api/topics')
        .send(exampleTopic);

      const update = {
        incorrectField: 'Updated field'
      };

      try {
        await api()
          .patch('/api/topics')
          .send(update);
      } catch (error) {
        expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      }
    });

    it('should not update a topic via PATCH /topics with invalid body', async () => {
      const _id = 'a266488f577495b2805bf474';
      await api()
        .post('/api/topics')
        .send(Object.assign(exampleTopic, { _id }))
        .expect(201);

      const update = {
        _id,
        incorrectField: 'Updated field',
      };

      try {
        await api()
          .patch('/api/topics')
          .send(update);
      } catch (error) {
        expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      }
    });

    it('should delete a specific topic via DELETE /topics/:id', async () => {
      const _id = 'a266488f577495b2805bf474';
      await api()
        .post('/api/topics')
        .send(Object.assign(exampleTopic, { _id }))
        .expect(201);

      await api()
        .delete(`/api/topics/${_id}`)
        .expect(204);
    });
  });

  describe('Card model', () => {
    it('should get a list of cards via GET /cards', async () => {
      await api()
        .post('/api/cards')
        .send(exampleCard);

      const response = await api()
        .get('/api/cards')
        .expect(200);

      expect(response.body.length).not.toBe(0);
      expect(response.body[0].question).toBe(exampleCard.question);
      expect(response.body[0].answer).toBe(exampleCard.answer);
      expect(response.body[0].type).toBe('simple');
      expect(response.body[0]._id).toBeDefined();
    });

    it('should get a list of cards with a specified topic via GET /cards/:id', async () => {
      const topicId = 'a266488f577495b2805bf473';
      await api()
        .post('/api/cards/')
        .send(Object.assign(exampleCard, { topicId }))
        .expect(201);

      const response = await api()
        .get(`/api/cards/${topicId}`)
        .expect(200);

      expect(response.body[0].question).toBe(exampleCard.question);
      expect(response.body[0].answer).toBe(exampleCard.answer);
      expect(response.body[0].topicId).toEqual(topicId);
    });

    it('should create a card via PUT /cards/:id', async () => {
      const _id = 'a266488f577495b2805bf475';
      await api()
        .put(`/api/cards/${_id}`)
        .send(exampleCard)
        .expect(200);
    });

    it('should not create a new card via PUT /cards/:id when id already exists', async () => {
      const _id = 'a266488f577495b2805bf475';
      const newCardBody = { answer: 'A different answer' };

      await api()
        .put(`/api/cards/${_id}`)
        .send(exampleCard)
        .expect(200);

      await api()
        .put(`/api/cards/${_id}`)
        .send(newCardBody)
        .expect(200);

      const card = await api()
        .get('/api/cards')
        .expect(200);

      expect(card.body[0].name).toBe(newCardBody.name);
      expect(card.body[0].description).toBe(exampleCard.description);
    });

    it('should create a card via POST /cards', async () => {
      const response = await api()
        .post('/api/cards')
        .send(exampleCard)
        .expect(201);

      expect(response.body.question).toBe(exampleCard.question);
      expect(response.body.answer).toBe(exampleCard.answer);
      expect(response.body._id).toBeDefined();
    });

    it('should not create a new invalid card via POST /cards', async () => {
      try {
        await api()
          .post('/api/cards')
          .send({ question: 'A test question' });
      } catch (error) {
        expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      }
    });

    it('should update a card via PATCH /cards', async () => {
      const _id = 'a266488f577495b2805bf475';
      await api()
        .post('/api/cards')
        .send(Object.assign(exampleCard, { _id }))
        .expect(201);

      const update = {
        _id,
        answer: 'Updated test answer',
      };

      const response = await api()
        .patch('/api/cards')
        .send(update)
        .expect(200);

      expect(response.body.success).toEqual(1);
    });

    it('should not update a card via PATCH /cards without specificed id', async () => {
      await api()
        .post('/api/cards')
        .send(exampleCard);

      const update = {
        incorrectField: 'Updated field'
      };

      try {
        await api()
          .patch('/api/cards')
          .send(update);
      } catch (error) {
        expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      }
    });

    it('should not update a card via PATCH /cards with invalid body', async () => {
      const _id = 'a266488f577495b2805bf475';
      await api()
        .post('/api/cards')
        .send(Object.assign(exampleCard, { _id }));

      const update = {
        _id,
        incorrectField: 'Updated field'
      };

      try {
        await api()
          .patch('/api/cards')
          .send(update);
      } catch (error) {
        expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      }
    });

    it('should delete a specific card via DELETE /cards/:id', async () => {
      const _id = 'a266488f577495b2805bf475';
      await api()
        .post('/api/cards')
        .send(Object.assign(exampleCard, { _id }))
        .expect(201);

      await api()
        .delete(`/api/cards/${_id}`)
        .expect(204);
    });
  });

  describe('Spaced repetition', () => {
    it('should repeat card with sequential unsures daily', async () => {
      const cardId = 'a266488f577495b2805bf475';
      const topicId = 'a266488f577495b2805bf474';

      await api()
        .post('/api/topics')
        .send(Object.assign(exampleTopic, {
          _id: topicId,
        }))
        .expect(201);
      const card = await api()
        .post('/api/cards')
        .send(Object.assign(exampleCard, {
          _id: cardId,
          status: 'unsure',
          topicId,
          dateToNextBeRevised: moment()
        }))
        .expect(201);
      const response = await api()
        .patch('/api/spaced')
        .send({
          _id: card.body._id,
          status: 'unsure'
        })
        .expect(200);
      const updatedTopic = await api()
        .get(`/api/topics/${topicId}`);
      const updatedCard = await api()
        .get('/api/cards');

      expect(response.body.card.nModified).toBe(1);
      expect(moment(card.body.dateToNextBeRevised).diff(updatedCard.body[0].dateToNextBeRevised, 'days')).toBe(-1);
      expect(moment(updatedCard.body[0]).diff(updatedTopic.body, 'days')).toBe(0);
    });

    it('should repeat card with neutral then unsure every two days', async () => {
      const cardId = 'a266488f577495b2805bf475';
      const topicId = 'a266488f577495b2805bf474';

      await api()
        .post('/api/topics')
        .send(Object.assign(exampleTopic, {
          _id: topicId,
        }))
        .expect(201);
      const card = await api()
        .post('/api/cards')
        .send(Object.assign(exampleCard, {
          _id: cardId,
          status: 'neutral',
          topicId,
          dateToNextBeRevised: moment()
        }))
        .expect(201);
      const response = await api()
        .patch('/api/spaced')
        .send({
          _id: card.body._id,
          status: 'unsure'
        })
        .expect(200);
      const updatedTopic = await api()
        .get(`/api/topics/${topicId}`);
      const updatedCard = await api()
        .get('/api/cards');

      expect(response.body.card.nModified).toBe(1);
      expect(moment(card.body.dateToNextBeRevised).diff(updatedCard.body[0].dateToNextBeRevised, 'days')).toBe(-2);
      expect(moment(updatedCard.body[0]).diff(updatedTopic.body, 'days')).toBe(0);
    });

    it('should repeat card with unsure then neutral every five days', async () => {
      const cardId = 'a266488f577495b2805bf475';
      const topicId = 'a266488f577495b2805bf474';

      await api()
        .post('/api/topics')
        .send(Object.assign(exampleTopic, {
          _id: topicId,
        }))
        .expect(201);
      const card = await api()
        .post('/api/cards')
        .send(Object.assign(exampleCard, {
          _id: cardId,
          status: 'unsure',
          topicId,
          dateToNextBeRevised: moment()
        }))
        .expect(201);
      const response = await api()
        .patch('/api/spaced')
        .send({
          _id: card.body._id,
          status: 'neutral'
        })
        .expect(200);
      const updatedTopic = await api()
        .get(`/api/topics/${topicId}`);
      const updatedCard = await api()
        .get('/api/cards');

      expect(response.body.card.nModified).toBe(1);
      expect(moment(card.body.dateToNextBeRevised).diff(updatedCard.body[0].dateToNextBeRevised, 'days')).toBe(-5);
      expect(moment(updatedCard.body[0]).diff(updatedTopic.body, 'days')).toBe(0);
    });

    it('should repeat card with neutral then confident every ten days', async () => {
      const cardId = 'a266488f577495b2805bf475';
      const topicId = 'a266488f577495b2805bf474';

      await api()
        .post('/api/topics')
        .send(Object.assign(exampleTopic, {
          _id: topicId,
        }))
        .expect(201);
      const card = await api()
        .post('/api/cards')
        .send(Object.assign(exampleCard, {
          _id: cardId,
          status: 'neutral',
          topicId,
          dateToNextBeRevised: moment()
        }))
        .expect(201);
      const response = await api()
        .patch('/api/spaced')
        .send({
          _id: card.body._id,
          status: 'confident'
        })
        .expect(200);
      const updatedTopic = await api()
        .get(`/api/topics/${topicId}`);
      const updatedCard = await api()
        .get('/api/cards');

      expect(response.body.card.nModified).toBe(1);
      expect(moment(card.body.dateToNextBeRevised).diff(updatedCard.body[0].dateToNextBeRevised, 'days')).toBe(-10);
      expect(moment(updatedCard.body[0]).diff(updatedTopic.body, 'days')).toBe(0);
    });

    it('should repeat card with confident then confident every thirty days', async () => {
      const cardId = 'a266488f577495b2805bf475';
      const topicId = 'a266488f577495b2805bf474';

      await api()
        .post('/api/topics')
        .send(Object.assign(exampleTopic, {
          _id: topicId,
        }))
        .expect(201);
      const card = await api()
        .post('/api/cards')
        .send(Object.assign(exampleCard, {
          _id: cardId,
          status: 'confident',
          topicId,
          dateToNextBeRevised: moment()
        }))
        .expect(201);
      const response = await api()
        .patch('/api/spaced')
        .send({
          _id: card.body._id,
          status: 'confident'
        })
        .expect(200);
      const updatedTopic = await api()
        .get(`/api/topics/${topicId}`);
      const updatedCard = await api()
        .get('/api/cards');

      expect(response.body.card.nModified).toBe(1);
      expect(moment(card.body.dateToNextBeRevised).diff(updatedCard.body[0].dateToNextBeRevised, 'days')).toBe(-30);
      expect(moment(updatedCard.body[0]).diff(updatedTopic.body, 'days')).toBe(0);
    });
  });
});

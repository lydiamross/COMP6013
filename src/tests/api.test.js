/* eslint-disable no-underscore-dangle */
const nodeFetch = require('node-fetch');

const fetch = async (method, path, body) => {
  const response = await nodeFetch(
    `${process.env.BASE_URL}:${process.env.API_PORT}${path}`,
    {
      method,
      body: typeof body === 'string' ? body : JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  if (response.status < 200 || response.status > 299) throw new Error(`API returned status ${response.status}`);
  return response.json();
};

describe('API tests on GET method', () => {
  test('GET /api/cards', async () => {
    const cards = await fetch('get', '/api/cards');
    expect(cards.length).not.toBe(0);
    const firstCard = cards[0];
    expect(firstCard.question).toMatch(/\w/);
    expect(typeof firstCard.type).toBe('string');
  });

  test('GET /api/cards/:_id', async () => {
    const cards = await fetch('get', '/api/cards');
    expect(cards.length).not.toBe(0);
    const firstCard = cards[0];
    const card = await fetch('get', `/api/cards/${firstCard._id}`);
    expect(card.question).toBe(firstCard.question);
  });

  test('GET /api/topics', async () => {
    const topics = await fetch('get', '/api/topics');
    expect(topics.length).not.toBe(0);
    const firstTopic = topics[0];
    expect(firstTopic.name).toMatch(/\w/);
    expect(typeof firstTopic.cards).toBe('array');
  });

  test('GET /api/topics/:_id', async () => {
    const topics = await fetch('get', '/api/topics');
    expect(topics.length).not.toBe(0);
    const firstTopic = topics[0];
    const topic = await fetch('get', `/api/topics/${firstTopic._id}`);
    expect(topic.name).toBe(firstTopic.name);
  });
});

describe('API tests on POST method', () => {
  test('POST /api/cards', async () => {
    const sampleCardBody = [{
      "_id": "e0dbdd80d092359d6c553cba",
      "createdDate": "2021-02-01T12:01:00.000Z",
      "type": "simple",
      "topicId": "e964314a0d72beb0b1e37aea",
      "question": "Example test question",
      "answer": "Example test answer",
    }];
    const postResponse = await fetch('post', '/api/cards', sampleCardBody);
    const card = await fetch('get', '/api/cards/e0dbdd80d092359d6c553cba');

    expect(postResponse._id).toEqual(card._id);
    expect(postResponse.question).toEqual(card.question);
  });

  test('POST /api/topics', async () => {
    const sampleCardBody = [{
      "_id": "aeb2ba54d1c19295fbce87ed",
      "name": 'Example test name',
      "description": 'Example test description',
      "cards": ['e0dbdd80d092359d6c553cba']
    }];
    const postResponse = await fetch('post', '/api/topics', sampleCardBody);
    const topic = await fetch('get', '/api/topics/aeb2ba54d1c19295fbce87ed');

    expect(postResponse._id).toEqual(topic._id);
    expect(postResponse.name).toEqual(topic.name);
    expect(typeof postResponse.cards).toBe('array');
  });
});

describe('API tests on PUT method', () => {
  test('PUT /api/cards', async () => {
    const sampleCardBody = {
      "_id": "cb97fbe70eab4ef2694ec5ff",
      "topicId": "e964314a0d72beb0b1e37aea",
      "question": "Example test question",
      "answer": "Example test answer",
    };
    const putResponse = await fetch('put', '/api/cards', sampleCardBody);
    const card = await fetch('get', '/api/cards/cb97fbe70eab4ef2694ec5ff');

    expect(putResponse._id).toEqual(card._id);
    expect(putResponse.question).toEqual(card.question);
  });

  test('PUT /api/topics', async () => {
    const sampleCardBody = [{
      "_id": "a266488f577495b2805bf474",
      "name": 'Example test name',
      "description": 'Example test description',
      "cards": ['e0dbdd80d092359d6c553cba']
    }];
    const postResponse = await fetch('post', '/api/topics', sampleCardBody);
    const topic = await fetch('get', '/api/topics/a266488f577495b2805bf474');

    expect(postResponse._id).toEqual(topic._id);
    expect(postResponse.name).toEqual(topic.name);
    expect(typeof postResponse.cards).toBe('array');
  });
});

describe('API tests on DELETE method', () => {
  test('DELETE /api/cards/:_id', async () => {
    const cards = await fetch('get', '/api/cards');
    expect(cards.length).not.toBe(0);
    const firstCard = cards[0];
    const response = await fetch('delete', `/api/cards/${firstCard._id}`);
    expect(response.deletedCount).toBe(1);
    expect(response.ok).toBe(1);
  });

  test('DELETE /api/topics/:_id', async () => {
    const topics = await fetch('get', '/api/topics');
    expect(topics.length).not.toBe(0);
    const firstTopic = topics[0];
    const response = await fetch('delete', `/api/topics/${firstTopic._id}`);
    expect(response.deletedCount).toBe(1);
    expect(response.ok).toBe(1);
  });
});

describe('API tests on PATCH method', () => {
  test('PATCH /api/cards', async () => {
    const sampleCardUpdate = {
      "_id": "cb97fbe70eab4ef2694ec5ff",
      "status": "neutral",
    };
    const patchResponse = await fetch('patch', '/api/cards', sampleCardUpdate);
    const card = await fetch('get', '/api/cards/cb97fbe70eab4ef2694ec5ff');

    expect(patchResponse._id).toEqual(card._id);
    expect(patchResponse.status).toEqual(card.status);
  });

  test('PATCH /api/topics', async () => {
    const sampleTopicUpdate = [{
      "_id": "a266488f577495b2805bf474",
      "description": 'Updated test description',
    }];
    const postResponse = await fetch('patch', '/api/topics', sampleTopicUpdate);
    const topic = await fetch('get', '/api/topics/a266488f577495b2805bf474');

    expect(postResponse._id).toEqual(topic._id);
    expect(postResponse.description).toEqual(topic.description);
    expect(typeof postResponse.cards).toBe('array');
  });
});
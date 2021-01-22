/* eslint-disable no-underscore-dangle */
const nodeFetch = require('node-fetch');

const fetch = async (method, path, body) => {
  const response = await nodeFetch(
    `${process.env.BASE_URL}:${process.env.PORT}${path}`,
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

describe('API tests', () => {
  test('GET /api/cards', async () => {
    const cards = await fetch('get', '/api/cards');
    expect(cards.length).not.toBe(0);
    const firstCard = cards[0];
    expect(firstCard.question).toMatch(/\w/);
    expect(typeof firstCard.type).toBe('string');
  });

  test('GET /api/card/:_id', async () => {
    const cards = await fetch('get', '/api/cards');
    expect(cards.length).not.toBe(0);
    const firstCard = cards[0];
    const card = await fetch('get', `/api/card/${firstCard._id}`);
    expect(card.question).toBe(firstCard.question);
  });

  test('GET /api/topics', async () => {
    const topics = await fetch('get', '/api/topics');
    expect(topics.length).not.toBe(0);
    const firstTopic = topics[0];
    expect(firstTopic.name).toMatch(/\w/);
    expect(typeof firstTopic.cards).toBe('array');
  });

  test('GET /api/topic/:_id', async () => {
    const topics = await fetch('get', '/api/cards');
    expect(topics.length).not.toBe(0);
    const firstTopic = topics[0];
    const topic = await fetch('get', `/api/topic/${firstTopic._id}`);
    expect(topic.name).toBe(firstTopic.name);
  });
});

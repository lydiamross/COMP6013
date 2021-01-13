const mongoose = require('mongoose');
const { credentials } = require('./config');
const Card = require('./models/card');
const Topic = require('./models/topic');

if (!credentials.mongo) {
  console.error('MongoDB connection string missing');
  process.exit(1);
}

mongoose.connect(credentials.mongo);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB error: ${err.message}`);
  process.exit(1);
});
db.once('open', () => console.log('MongoDB connection running'));

Card.find((err, cards) => {
  if (err) return console.error(err);
  if (cards.length) return 0;

  new Card({
    id: 'ccf5363ec9acf5cc76db6eba',
    createdDate: '2021-01-12T12:01:00.000Z',
    type: 'simple',
    topicId: '07890edd92ee04e23ba383c5',
    question: 'Define idempotence',
    answer: 'An idempotent operation is an operation, action or request that can be applied multiple times without changing the result',
    previousStatus: 'neutral',
  }).save();

  new Card({
    id: 'e02425a5cb834bf041f721e8',
    createdDate: '2021-01-12T12:02:00.000Z',
    type: 'simple',
    topicId: '07890edd92ee04e23ba383c5',
    question: 'Define atomicity',
    answer: 'An operation is considered atomic if it is guaranteed to be isolated from other operations that may be happening at the same time',
    previousStatus: 'confident',
  }).save();
});

Topic.find((err, topics) => {
  if (err) return console.error(err);
  if (topics.length) return 0;

  new Topic({
    id: '07890edd92ee04e23ba383c5',
    createdDate: '2021-01-12T12:00:00.000Z',
    name: 'Definitions',
    description: 'Computing terms',
    cards: ['ccf5363ec9acf5cc76db6eba', 'e02425a5cb834bf041f721e8']
  }).save();
});

module.exports = {
  getCards: async (options = {}) => Card.find(options),
  getTopics: async (options = {}) => Topic.find(options),
};

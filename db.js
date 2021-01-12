const mongoose = require('mongoose');
const { credentials } = require('./config');

const { connectionString } = credentials.mongo;

if (!connectionString) {
  console.error('MongoDB connection string missing');
  process.exit(1);
}

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB error: ${err.message}`);
  process.exit(1);
});
db.once('open', () => console.log('MongoDB connection running'));

module.exports = {
  getCards: async (options = {}) => {
    const cards = [
      {
        id: 'ccf5363ec9acf5cc76db6eba',
        createdDate: '2021-01-12T12:00:00.000Z',
        type: 'simple',
        topicId: '07890edd92ee04e23ba383c5',
        question: 'Define idempotence',
        answer: 'An idempotent operation is an operation, action or request that can be applied multiple times without changing the result',
        previousStatus: 'neutral',
        available: true,
      },
    ];
    if (options.available !== undefined) {
      return cards.filter(({ available }) => available === options.available);
    }
    return cards;
  }
};

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
  getCards: async (options = {}) => options
};

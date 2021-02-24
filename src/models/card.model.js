const mongoose = require('mongoose');

const CARDTYPES = [
  'true-false',
  'choice',
  'fill-in',
  'long-fill-in',
  'numeric',
  'simple'
];

const STATUSTYPES = [
  'confident',
  'neutral',
  'unsure'
];

const cardSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // 24-character hexadecimal string
  createdDate: { type: mongoose.Schema.Types.Date, default: Date.now },
  updatedDate: mongoose.Schema.Types.Date,
  type: { type: mongoose.Schema.Types.String, enum: CARDTYPES },
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  question: mongoose.Schema.Types.String,
  answer: mongoose.Schema.Types.String,
  status: { type: mongoose.Schema.Types.String, enum: STATUSTYPES },
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;

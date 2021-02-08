const mongoose = require('mongoose');

CARDTYPES = [
  'true-false',
  'choice',
  'fill-in',
  'long-fill-in',
  'numeric',
  'simple'
];

STATUSTYPES = [
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
  previousStatus: { type: mongoose.Schema.Types.String, enum: STATUSTYPES },
  previousAnswerDate: mongoose.Schema.Types.Date,
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;

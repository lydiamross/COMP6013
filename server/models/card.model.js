const moment = require('moment');
const mongoose = require('mongoose');

const STATUS_TYPES = [
  'confident',
  'neutral',
  'unsure'
];

const cardSchema = mongoose.Schema({
  createdDate: { type: mongoose.Schema.Types.Date, default: Date.now },
  updatedDate: mongoose.Schema.Types.Date,
  type: { type: mongoose.Schema.Types.String, default: 'simple' },
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  question: { type: mongoose.Schema.Types.String, required: true },
  answer: { type: mongoose.Schema.Types.String, required: true },
  status: { type: mongoose.Schema.Types.String, enum: STATUS_TYPES, default: 'unsure' },
  dateToNextBeRevised: { type: mongoose.Schema.Types.Date, default: moment().add(1, 'days') }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;

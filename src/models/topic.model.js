const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // 24-character hexadecimal string
  createdDate: { type: mongoose.Schema.Types.Date, default: Date.now },
  updatedDate: mongoose.Schema.Types.Date,
  name: mongoose.Schema.Types.String,
  description: mongoose.Schema.Types.String,
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;

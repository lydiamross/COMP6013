/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const checkObjectIdIsValid = (card) => {
  if (!mongoose.isValidObjectId(card._id) || card._id === undefined) {
    card._id = new mongoose.mongo.ObjectId();
  }
  return card._id;
};

exports.checkObjectIdIsValid = checkObjectIdIsValid;

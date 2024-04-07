const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  //will be adjusted based on the final product.
  name : String,
  type : String,
  hp : String,
  attack : String,
  cost : String,
  ability : String,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
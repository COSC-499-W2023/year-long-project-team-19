const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
  order : String,
  title : String,
  context : String,
});

const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;

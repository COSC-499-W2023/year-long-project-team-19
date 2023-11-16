const Rules = require('../models/Rules');

const showRules = async (req, res) => {
  try {
    const rules = await Rules.find().sort({ order: 1 });

    return res.status(200).json({ rules: rules});

  } catch (error) {
    return res.status(500).json({ message: 'Server error'});
  }
};

const editRules = async (req, res) => {
 try {
  const { order = null, context = null, title = null, _id } = req.body; // order, title and context are optional
  const rules = await Rules.findOne({ _id });

  if (!rules) {
    return res.status(404).json({ message: 'Rule not found'});
  }

  rules.order = order !== null ? order : rules.order;
  rules.context = context !== null ? context : rules.context;
  rules.title = title !== null ? title : rules.title;
  
  rules.markModified('rules');
  rules.save();

  return res.status(200).json({ message: 'Rule updated', rules: rules });

 } catch (error) {
  return res.status(500).json({ message: 'Server error'});
 }
};

module.exports = {
  showRules,
  editRules,
};
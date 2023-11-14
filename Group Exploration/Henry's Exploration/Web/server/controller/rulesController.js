const Rules = require('../models/Rules');

const showRules = async (req, res) => {
  try {
    const rules = await Rules.find().sort({ order: 1 });

    return res.status(200).json({ rules: rules});

  } catch (error) {
    return res.status(500).json({ message: 'Server error'});
  }
};

module.exports = {
  showRules,
};
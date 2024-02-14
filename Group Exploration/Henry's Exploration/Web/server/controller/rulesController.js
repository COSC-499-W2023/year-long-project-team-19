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

const addRules = async (req, res) => {
  const { order, context, title } = req.body;

  if (!order || !context || !title) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    let newOrder = order;
    let rulesToUpdate = await Rules.find({ order: { $gte: order } }).sort({ order: -1 }); 

    // if rule's order already exists, increment the order of the existing rules
    if (rulesToUpdate.length > 0) {
      rulesToUpdate.forEach(async (rule) => {
        rule.order = (parseInt(rule.order) + 1);
        await rule.save();
      });
    }

    const newRule = new Rules({ order: newOrder, context, title });
    await newRule.save();
    
    return res.status(200).json({ message: 'Rule added', rules: newRule });
  } catch (error) {
    return res.status(500).json({ message: 'Server error'});
  }
};

const deleteRules = async (req, res) => {
  const { _id } = req.body;

  if(!_id) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const rule = await Rules.findOne({ _id });
    
    await rule.deleteOne();
    return res.status(200).json({ message: 'Rule deleted'});
  } catch (error) {
    res.status(500).json({ message: 'Server error'});
  }
};
module.exports = {
  showRules,
  editRules,
  addRules,
  deleteRules,
};
const Cards = require('../models/Cards');

const showCards = async (req, res) => {
  try {
    const cards = await Cards.find({});

    return res.status(200).json({ cards });
  } catch (error) {
    return res.status(500).json({ message: 'Server error'});
  }
};


module.exports = {
  showCards,
};
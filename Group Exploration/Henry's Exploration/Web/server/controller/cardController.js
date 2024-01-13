const Cards = require('../models/Cards');

const showCards = async (req, res) => {
  try {
    const cards = await Cards.find({});

    return res.status(200).json({ cards });
  } catch (error) {
    return res.status(500).json({ message: 'Server error'});
  }
};



const addCard = async (req, res) => {
  const { name, type, hp, attack, defense, ability } = req.body;
  if(!name || !type || !hp || !attack || !defense || !ability) {
    return res.status(400).json({ message: 'All fields are required'});
  }

  try {
    const card = await Cards.findOne({ name });
    if(card){
      return res.status(400).json({ message: 'Card already exists'});
    }
    const newCard = new Cards({ name, type, hp, attack, defense, ability });
    await newCard.save();

    return res.status(200).json({ message: 'Card added', card: newCard });
  } catch (error) {
    res.status(500).json({ message: 'Server error'});
  }
};

//add delete card function
//add edit card function


module.exports = {
  showCards,
  addCard,
};
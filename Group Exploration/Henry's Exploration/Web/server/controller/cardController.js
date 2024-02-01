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
  const { name, type, hp, attack, cost, ability } = req.body;
  if(!name || !type || !hp || !attack || !cost || !ability) {
    return res.status(400).json({ message: 'All fields are required'});
  }

  try {
    const card = await Cards.findOne({ name });
    if(card){
      return res.status(400).json({ message: 'Card already exists'});
    }
    const newCard = new Cards({ name, type, hp, attack, cost, ability });
    await newCard.save();

    return res.status(200).json({ message: 'Card added', card: newCard });
  } catch (error) {
    res.status(500).json({ message: 'Server error'});
  }
};

const deleteCard = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const deletedCard = await Cards.findOneAndDelete({ name });

    if (!deletedCard) {
      return res.status(404).json({ message: 'Card not found' });
    }

    return res.status(200).json({ message: 'Card deleted', deletedCard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

//add edit card function
const editCard = async (req, res) => {
  try {
    const { name, type, hp, attack, cost, ability } = req.body;
    if(!name || !type || !hp || !attack || !cost || !ability) {
      return res.status(400).json({ message: 'All fields are required'});
    }

    const markedCard = await Cards.findOne({ name });
    if(!markedCard){
      return res.status(400).json({ message: 'Card does not exist'});
    }
    markedCard.name = name;
    markedCard.type = type;
    markedCard.hp = hp;
    markedCard.attack = attack;
    markedCard.cost = cost;
    markedCard.ability = ability;

    markedCard.markModified('card');
    markedCard.save();
    
    res.status(200).json({ message: 'Card edited', card: markedCard});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
  showCards,
  addCard,
  deleteCard,
  editCard,
};
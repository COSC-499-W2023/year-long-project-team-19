const User = require('../models/User');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });

    if(!user) {
      return res.status(401).json({ message: 'User not found'});
    }

    if(user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password'});
    }

    return res.status(200).json({ message: 'Loggin successful'});
  } catch (error) {
    return res.status(500).json({ message: 'Server error'});
  }
};

module.exports = {
  login,
};
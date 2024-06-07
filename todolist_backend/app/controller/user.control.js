const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'username'); 
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users', error: err });
  }
}

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).send('User already exists');

    const hashedPassword = await bcrypt.hash(password, 9);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).send('User registered');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Internal server error');
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Invalid user credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid password');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).send('Internal server error');
  }
};

exports.deleteAccount = async (req, res) => {
  const { id } = req.body;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User account deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user account', error });
  }
}
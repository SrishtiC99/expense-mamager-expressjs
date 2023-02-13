const asyncWrapper = require('../middlewares/async');
const jwt = require('jsonwebtoken');

const login = asyncWrapper(async (req, res) => {
  const {username, password} = req.body;
  if(!username || !password) {
    return res.status(400).json(`please provide both username and password`);
  }
  // dummy id
  const id = new Date().getDate();
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});
  res.status(200).json({ msg: 'user created', token});
})

const dashboard = asyncWrapper(async (req, res) => {
  const authHeader = req.headers.authorization;

  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json(`No token provided`);
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
  } catch (e) {
    return res.status(401).json(`No token provided`);
  }
})

module.exports = {login, dashboard};

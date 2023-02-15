const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json(`Authentication invalid`);
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to all the routes;
    req.user = {userId: decoded.userId, name: decoded.name};
    next();
  } catch (e) {
    return res.status(401).json(`Authentication invalid`);
  }
}

module.exports = authenticationMiddleware;

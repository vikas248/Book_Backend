import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

function authenticateJWT(req, res, next) {
  const token = req.header('Authorization');
  console.log(token)

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  console.log(JWT_SECRET);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token.' });
    }

    // Attach the user to the request object for use in other middleware or routes
    req.user = user;
    next();
  });
}

export default authenticateJWT;

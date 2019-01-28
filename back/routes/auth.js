const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secretKey } = require('../secretKey.json');
const db = require('../db');

const saltRounds = 10;

const router = express.Router();

const checkAuthorizationHeader = (req, res, next) => {
  const authHeader = req.get('authorization');
  if (!authHeader) {
    return res.status(401).json({
      error: 'Vous devez vous identifier'
    });
  }
  const token = authHeader.substr(7);
  jwt.verify(token, secretKey, (err) => {
    if (err) {
      return res.status(401).json({
        error: 'Token non valide'
      });
    }
  });
  return next();
};

router.get('/confidential-info', checkAuthorizationHeader, (req, res) => {
  res.json([
    { id: 1, accountKey: '22121975' }
  ]);
});

router.post('/signup', (req, res) => {
  // 1. je recup infos de login
  const { email, password } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }
    // récupérer le passw crypté dans hash
    const user = {
      email, password: hash
    };
    db.query('INSERT INTO user SET ?', user, (error, result) => {
      if (error) {
        return res.status(500).json({
          error: error.message
        });
      }
      res.json({
        id: result.insertId
      });
    });
  });
});


router.post('/signin', (req, res) => {
  // 1. je recup infos de login
  const { email, password } = req.body;
  // 2. je vérifie dans db que user existe
  // 3. véerifer que passw reçu = passw encrypté dans bdd
  // 4. générer jwt pour authentifier futures requêtes
  const userRecord = {
    id: 1, email: 'john.doe@example.com', avatar: ''
  };
  jwt.sign(userRecord, secretKey, (err, token) => {
    if (err) {
      return res.status(401).json({
        error: 'JWT generation failed'
      });
    }
    return res.json({
      token
    });
  });
});

module.exports = router;

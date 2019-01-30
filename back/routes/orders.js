const express = require('express');
const db = require('../db');

const router = express.Router();

const fakeCheckAuthentication = (req, res, next) => {
  req.user = { id: 1 };
  next();
};

router.post('/', fakeCheckAuthentication, (req, res) => {
  const userId = req.user.id;
  console.log(userId);
  db.query('INSERT INTO `order` SET ?', { userId }, (err, results) => {
    if (err) {
      return res.status(500).json({
        err: err.message,
        details: err.sql,
        message: 'Impossible de créer la commande'
      });
    }
    res.sendStatus(200);
  });
});

module.exports = router;

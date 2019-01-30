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
  db.queryAsync('INSERT INTO `order` SET ?', { userId })
    .then(results => results.insertId) // recup de l'id de la commande
    .then(orderId => {
      res.sendStatus(200);
    })
    .catch(err => res.status(500).json({
      err: err.message,
      details: err.sql,
      message: 'Impossible de créer la commande'
    }));
});

module.exports = router;

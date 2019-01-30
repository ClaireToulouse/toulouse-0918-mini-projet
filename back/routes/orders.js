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
      const items = req.body.map(item => ({
        productId: item.id,
        price: item.price,
        quantity: item.quantity,
        orderId
      }));
      const promises = items.map(item => db.queryAsync('INSERT INTO order_product SET ?', item));
      return Promise.all(promises)
        .then(() => res.sendStatus(201));
    })
    .catch(err => res.status(500).json({
      err: err.message,
      details: err.sql,
      message: 'Impossible de créer la commande'
    }));
});

module.exports = router;

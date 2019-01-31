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

router.get('/', (req, res) => {
  // const userId = req.user.id;
  const userId = 1;
  db.query(
    `SELECT products.*, \`order\`.id AS orderId, \`order\`.createDate
    FROM products
    inner join order_product on products.id = order_product.productId
    inner join \`order\` on order.id = order_product.orderId
    WHERE \`order\`.userId=?`,
    userId, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'affichage de votre commande");
        console.log(err);
      }
      res.json(results);
    }
  );
});

module.exports = router;

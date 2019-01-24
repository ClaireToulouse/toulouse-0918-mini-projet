const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM products', (err, products) => {
    if (err) {
      res.status(500).send('Erreur lors de l\'affichage des produits');
    }
    return res.json(products);
  });
});

router.get('/:id', (req, res) => {
  const productSlug = req.params.id;
  db.query('SELECT * FROM products WHERE slug = ?', [productSlug], (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de l'affichage du produit ${productSlug}`);
    }
    if (results.length === 0) {
      return res.status(404).send(`Le produit ${productSlug} n'existe pas`);
    }
    return res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const newProduct = req.body;
  db.query('INSERT INTO products SET ?', [newProduct], (err, results) => {
    if (err) {
      return res.status(500).json({
        err: err.message,
        details: err.sql,
        message: 'Impossible de créer le produit'
      });
    }
    console.log(results);
    const productId = results.insertId;
    db.query('SELECT * FROM products WHERE id= ?', [productId], (err, products) => {
      res.status(201).json(products[0]);
    });
  });
});

module.exports = router;

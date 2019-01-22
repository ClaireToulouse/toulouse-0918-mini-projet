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

router.get('/:slug', (req, res) => {
  // const { slugorID } = req.params;
  const productSlug = req.params.id;
  db.query('SELECT * FROM products WHERE slug = ?', [productSlug], (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de l'affichage du produit ${productSlug}`);
    }
    if (results.length === 0) {
      return res.status(404).send(`Le produit ${productSlug} n'existe pas`);
    }
    return res.json(results);
  });
});

module.exports = router;

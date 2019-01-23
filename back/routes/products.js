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
  // const { slugorID } = req.params;
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
      res.status(500).send(`Impossible de créer la produit ${newProduct}`);
    }
    res.status(201).send('votre produit a bien été ajouté');
    // db.query('SELECT * FROM products', product => {
    //   res.json(product);
    // });
  });
});

module.exports = router;

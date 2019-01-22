const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');

const app = express();
const port = process.env.port || 2345;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/products', productsRouter);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Server has crashed');
  }
  console.log(`Server is listening on ${port}`);
});

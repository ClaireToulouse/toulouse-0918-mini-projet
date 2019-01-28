const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');

const app = express();
const port = process.env.port || 2345;

// const checkAuthorizationHeader = (req, res, next) => {
//   const authHeader = req.get('authorization');
//   if (!authHeader) {
//     return res.status(401).json({
//       error: 'Vous devez vous identifier'
//     });
//   }
//   return next();
// };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/products', productsRouter);
app.use('/auth', authRouter);
// app.get('/api/confidential-info', checkAuthorizationHeader, (req, res) => {
//   res.json([
//     { id: 1, accountKey: '22121975' }
//   ]);
// });


app.listen(port, (err) => {
  if (err) {
    throw new Error('Server has crashed');
  }
  console.log(`Server is listening on ${port}`);
});

const express = require('express');
require('dotenv').config({ path: `${__dirname}/.env` });
const app = express();

const router = express.Router();
const PORT = process.env.PORT || 8080;
const HOST = 'localhost';

app.use((req, res, next) => {
  console.log('Наше проміжне ПЗ');
  // console.log('req ----->', req);
  // console.log('res ----->', res);
  console.log('next() ----->', next());
  next();
});

app.get('/contact/:userid', (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.userid}`);
  console.log('userid ------->', req.params.userid);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/contact', (req, res) => {
  res.send('<h1>Contact page 2</h1>');
});

// //! визначимо домашній роутер
// router.get('/', (req, res) => {
//   res.send('Це головний роутер');
// });

// //! визначимо роутер about
// router.get('/about', (req, res) => {
//   res.send('About');
// });

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }

  console.log(`Server started: http://${HOST}:${PORT}`);
});

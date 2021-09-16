const express = require('express');
const bodyParser = require('body-parser');

const movieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', movieController.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Ouvindo a porta ', PORT)
});

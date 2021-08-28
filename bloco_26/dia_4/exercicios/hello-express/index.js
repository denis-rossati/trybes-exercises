const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
    res.json(recipes);
});

const port = 3005;

app.listen(port, () => {
    console.log(`App on ${port} app`)
})

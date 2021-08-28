const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3020;

app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];


app.get('/recipes/search', function (req, res) {
  const { name, minPrice } = req.query;
  const filteredRecipes = recipes.filter(({ name: recipeName, price }) => recipeName.includes(name) && price >= parseFloat(minPrice));
  if(!filteredRecipes || filteredRecipes.length === 0) return res.status(404).send('Recipe not found.');
  res.status(200).json(filteredRecipes);
});

app.get('/drinks/search', function(req, res) {
  const { name, minPrice } = req.query;
  const filteredDrinks = drinks.filter(({ name: drinkName, price }) => drinkName.includes(name) && price >= parseFloat(minPrice));
  if(!filteredDrinks || filteredDrinks.length === 0) return res.status(404).send('Recipe not found.')
})

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  res.status(200).json(recipe);
});

app.get('/drink/:id', function(req, res) {
  const { id } = req.params;
  const choosenDrink = drinks.find(({ id: drinkId }) => parseInt(id) === drinkId);
  if(!choosenDrink) return res.status(404).send('Id is not valid!');
  return res.status(200).json(choosenDrink);
})

app.get('/drinks-sort', function(req, res) {
  const drinksSorted = drinks.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  });
  res.json(drinksSorted);
})

app.get('/recipes-sort', function(req, res) {
  const recipesSorted = recipes.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  });
  res.json(recipesSorted);
});

app.delete('/drinks/:id', function(req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));
  if(drinkIndex === -1) return res.status(404).json({ message: "Drink not found" });
  drinks.splice(drinkIndex, 1);
  res.status(200).end();
})

app.delete('/recipes/:id', function(req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  if(recipeIndex === -1) return res.status(404).json({ message: "Recipe not found!" });
  recipes.splice(recipeIndex, 1);
  res.status(200).end
})

app.put('/drinks/:id', function(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if(drinkIndex === -1) return res.status(404).json({ message: "Drink not found!" });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
})

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if(recipeIndex === -1) return res.status(404).json({ message: "Recipe not found!"});

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
})

app.post('/drinks', function(req, res) {
  const { id, title, price } = req.body;
  drinks.push({ id, title, price });
  res.status(201).json({ message: "Adição concluída!"})
})

app.post('/recipes', function(req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
})

app.get('/validate', function (req, res) {
  const token = req.headers.authorization;
  if(token.length !== 10) return res.status(401).send("token inválido");
  res.status(200).json({ message: "Token válido!" });
})

app.get('/recipes', function(req, res) {
  res.json(recipes);
})

app.get('/drinks', function(req, res) {
  res.json(drinks);
});

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`)
});
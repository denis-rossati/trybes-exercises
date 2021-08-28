const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

app.post('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  const message = `Seu nome é ${name} e você tem ${age} anos de idade`
  res.status(200).json({ message, })
})

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  if(!name) return res.status(404).json({ message: 'Informe o nome'});
  const message = `Hello, ${ name }`;
  res.status(200).json({ message, }); 
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(Number(age) > 17) return res.status(401).json({ message: "401 - Unauthorized"});
  const message = `Greetings, ${name}. You have around ${75 - Number(age)} years to live`;
  res.status(200).json({ message })
})

app.listen(PORT, () => {
  console.log(`app runing on ${PORT} port`)
})

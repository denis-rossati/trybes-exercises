const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 3001;

const getSimpsonsObj = async () => {
  const simpsons = await fs.readFile('simpsons.json', 'utf8')
  .then((data) => JSON.parse(data));
  return simpsons;
}

const postNewSimpson = async (newChar, oldSimpsons) => {
  const newFile = JSON.stringify([...oldSimpsons, newChar ], null, 2);
  fs.writeFile('simpsons.json', newFile, { flag: 'w' })
  const simpsons = await getSimpsonsObj();
  console.log(simpsons);
} 

app.get('/simpsons/:id', async (req, res) => {
  const simpsons = await getSimpsonsObj();
  const { id: providedId } = req.params;
  const response = simpsons.find(({ id }) => id === providedId);
  if(!response) return res.status(404).json({ message: "Simpson not found:("})
  res.status(200).json(response);
  
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const newCharacter = { id, name };
  const simpsons = await getSimpsonsObj();
  postNewSimpson(newCharacter, simpsons);
  res.status(200).json({ "message": "Simpson posted successfully"});
});

app.get('/simpsons', async (req, res) => {
  const simpsons = await getSimpsonsObj();
  if(simpsons.length === 0) return res.status(500).json({ message: "Internal Server Error"})
  res.status(200).json(simpsons);
})

app.listen(PORT, () => {
  console.log('aplicação rodando na porta', PORT)
})
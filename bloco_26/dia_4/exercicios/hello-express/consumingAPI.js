const fetch = require('node-fetch');
fetch('http://localhost:3005/recipes')
  .then((data) => data.json())
  .then((info) => console.log(info));
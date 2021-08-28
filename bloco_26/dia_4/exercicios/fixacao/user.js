const fetch = require("node-fetch");
fetch('http://localhost:3020/recipes', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Bolo de pudim',
    price: 14,
  })
});

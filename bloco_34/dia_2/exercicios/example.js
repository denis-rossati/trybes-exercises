/* this is a example to fill a port */
const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Hello!');
})

app.listen(8000);
/* if you don't have permissions to obstruct the port, try using sudo or changing the port */

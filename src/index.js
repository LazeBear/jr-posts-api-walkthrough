const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/v1', routes);

app.listen(3000, () => {
  console.log('server listen on port 3000');
});

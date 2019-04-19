const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/v1', routes);

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});

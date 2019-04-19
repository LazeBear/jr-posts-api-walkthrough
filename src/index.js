const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();
const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

app.use(helmet());
app.use(morganLog);
app.use(cors());
app.use(express.json());

app.use('/v1', routes);

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});

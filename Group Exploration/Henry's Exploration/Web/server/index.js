require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  dbName: 'Capstone'
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

const loginRouter = require('./routes/loginRoutes');
const rulesRouter = require('./routes/rulesRoutes');
const cardsRouter = require('./routes/cardsRoutes');

app.use('/login', loginRouter);
app.use('/rules', rulesRouter);
app.use('/cards', cardsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
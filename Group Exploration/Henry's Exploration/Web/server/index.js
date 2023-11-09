const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



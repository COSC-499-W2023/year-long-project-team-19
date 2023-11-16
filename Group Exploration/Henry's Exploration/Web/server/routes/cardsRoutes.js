const express = require('express');
const router = express.Router();
const cardController = require('../controller/cardController');

router.get('/showCards', cardController.showCards);

module.exports = router;

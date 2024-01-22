const express = require('express');
const router = express.Router();
const cardController = require('../controller/cardController');

router.get('/showCards', cardController.showCards);
router.post('/addCard', cardController.addCard);
router.delete('/deleteCard', cardController.deleteCard);

module.exports = router;

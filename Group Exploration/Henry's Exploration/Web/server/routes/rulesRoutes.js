const express = require('express');
const router = express.Router();
const rulesController = require('../controller/rulesController');

router.get('/showRules', rulesController.showRules);

module.exports = router;

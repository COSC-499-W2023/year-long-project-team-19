const express = require('express');
const router = express.Router();
const rulesController = require('../controller/rulesController');

router.get('/showRules', rulesController.showRules);
router.post('/editRules', rulesController.editRules)
router.post('/addRules', rulesController.addRules);
router.delete('/deleteRules', rulesController.deleteRules);

module.exports = router;

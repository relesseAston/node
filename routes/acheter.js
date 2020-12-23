const express = require('express');
const router = express.Router();

const acheterController = require('../controllers/acheter.controller');
router.get('/',acheterController.acheter_list);
router.get('/:id',acheterController.detail_acheter)
router.post('/add',acheterController.add_acheter);

module.exports = router
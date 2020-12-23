const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const bienController = require('../controllers/bien.controller');
router.get('/',bienController.bien_list);
router.get('/:id',bienController.detail_bien)
router.post('/add',auth(),bienController.add_bien);
router.put('/:id',auth(),bienController.edit_bien);
router.delete('/:id',auth(),bienController.delete_bien);

module.exports = router
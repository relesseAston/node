const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const acheteurController = require('../controllers/acheteur.controller');
router.get('/',acheteurController.acheteur_list);
router.get('/:id',acheteurController.detail_acheteur)
router.post('/add',auth(),acheteurController.add_acheteur);
router.put('/:id',auth(),acheteurController.edit_acheteur);
router.delete('/:id',auth(),acheteurController.delete_acheteur);

module.exports = router
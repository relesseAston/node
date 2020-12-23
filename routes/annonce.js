const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const annonceController = require('../controllers/annonce.controller');
router.get('/',annonceController.annonce_list);
router.get('/:id',annonceController.detail_annonce)
router.post('/add',auth(),annonceController.add_annonce);
router.put('/:id',auth(),annonceController.edit_annonce);
router.delete('/:id',auth(),annonceController.delete_annonce);

module.exports = router
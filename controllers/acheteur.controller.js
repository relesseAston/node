//import Model
const Acheteur = require('../models').Acheteur;
/**
 * 
 * List all Acheteurs
 */
exports.acheteur_list = (req, res, next) => {
    Acheteur.findAll({})
    .then(acheteurs => res.status(200).json(acheteurs))
    .catch(err => console.log(err));
}

exports.detail_acheteur = (req, res, next) => {
    const id = req.params.id;
    Acheteur.findByPk(id)
    .then(acheteur => res.status(200).json(acheteur))
    .catch(err => console.log(err))
}

exports.add_acheteur = (req, res, next) => {
    const acheteur = req.body;
    Acheteur.create(acheteur)
        .then(acheteurCreated => res.status(201).json(acheteurCreated))
        .catch(err => console.log(err));
    
}

exports.edit_acheteur = (req, res, next) => {
    const id = req.params.id;
    const acheteur = req.body;
    Acheteur.update(bien, {
        where: {
            id: id
        }
    })
    .then(acheteurEdited => res.status(201).json(acheteurEdited))
    .catch(err => console.log(err))
}

exports.delete_acheteur = (req, res, next) => {
    const id = req.params.id;
    const acheteur = req.body;
    Acheteur.destroy(acheteur, {
        where: {
            id: id
        }
    })
    .then(acheteurDeleted => res.status(201).json({message:"Acheteur deleted"}))
    .catch(err => console.log(err))
}
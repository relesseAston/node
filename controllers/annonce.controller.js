//import Model
const Annonce = require('../models').Annonce;
const Bien = require('../models').Bien;
const Agent = require('../models').Agent;
/**
 * 
 * List all Biens
 */
exports.annonce_list = (req, res, next) => {
    Annonce.findAll({
        attributes:["id", "date_debut", "date_fin", "statut"],
        include: [
            {
                model: Bien,
                attributes: ['id', 'description', 'prix', 'surface', "mot_cle", "caracteristique", "photo"]
            },
            {
                model: Agent,
                attributes:["nom", "email"]
            }
        ]
    })
    .then(annonces => res.status(200).json(annonces))
    .catch(err => console.log(err));
}

exports.detail_annonce = (req, res, next) => {
    const id = req.params.id;
    Annonce.findByPk(id)
    .then(annonce => res.status(200).json(annonce))
    .catch(err => console.log(err))
}

exports.add_annonce = (req, res, next) => {
    const annonce = req.body;
    Annonce.create(annonce)
        .then(annonceCreated => res.status(201).json(annonceCreated))
        .catch(err => console.log(err));
    
}

exports.edit_annonce = (req, res, next) => {
    const id = req.params.id;
    const annonce = req.body;
    Annonce.update(annonce, {
        where: {
            id: id
        }
    })
    .then(annonceEdited => res.status(201).json(annonceEdited))
    .catch(err => console.log(err))
}

exports.delete_annonce = (req, res, next) => {
    const id = req.params.id;
    const annonce = req.body;
    Annonce.destroy(annonce, {
        where: {
            id: id
        }
    })
    .then(annonceDeleted => res.status(201).json({message:"Annonce deleted"}))
    .catch(err => console.log(err))
}
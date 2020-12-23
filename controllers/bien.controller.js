//import Model
const Bien = require('../models').Bien;
/**
 * 
 * List all Biens
 */
exports.bien_list = (req, res, next) => {
    Bien.findAll({})
    .then(biens => res.status(200).json(biens))
    .catch(err => console.log(err));
}

exports.detail_bien = (req, res, next) => {
    const id = req.params.id;
    Bien.findByPk(id)
    .then(bien => res.status(200).json(bien))
    .catch(err => console.log(err))
}

exports.add_bien = (req, res, next) => {
    const bien = req.body;
    Bien.create(bien)
        .then(bienCreated => res.status(201).json(bienCreated))
        .catch(err => console.log(err));
    
}

exports.edit_bien = (req, res, next) => {
    const id = req.params.id;
    const bien = req.body;
    Bien.update(bien, {
        where: {
            id: id
        }
    })
    .then(bienEdited => res.status(201).json(bienEdited))
    .catch(err => console.log(err))
}

exports.delete_bien = (req, res, next) => {
    const id = req.params.id;
    const bien = req.body;
    Bien.destroy(bien, {
        where: {
            id: id
        }
    })
    .then(bienDeleted => res.status(201).json({message:"Bien deleted"}))
    .catch(err => console.log(err))
}
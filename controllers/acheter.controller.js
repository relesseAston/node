//import Model
const Acheter = require('../models').Acheter;
/**
 * 
 * List all Acheteurs
 */
exports.acheter_list = (req, res, next) => {
    Acheter.findAll({})
    .then(acheters => res.status(200).json(acheters))
    .catch(err => console.log(err));
}

exports.detail_acheter = (req, res, next) => {
    const id = req.params.id;
    Acheter.findByPk(id)
    .then(acheter => res.status(200).json(acheter))
    .catch(err => console.log(err))
}

exports.add_acheter = (req, res, next) => {
    const acheter = req.body;
    Acheter.create(acheter)
        .then(acheterCreated => res.status(201).json(acheterCreated))
        .catch(err => console.log(err));
    
}
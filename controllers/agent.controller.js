//import Model
const Agent = require('../models').Agent;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/**
 * 
 * List all agents
 */
exports.agent_list = (req, res, next) => {
    Agent.findAll({})
    .then(agents => res.status(200).json(agents))
    .catch(err => console.log(err));
}

exports.detail_agent = (req, res, next) => {
    const id = req.params.id;
    Agent.findByPk(id)
    .then(agent => res.status(200).json(agent))
    .catch(err => console.log(err))
}

exports.register_agent = (req, res, next) => {
    bcrypt.hash(req.body.pwd, 10, (err,hash) => {
        if(err) {
            throw err;
        }
        let agent = req.body;
        agent.pwd = hash;
        Agent.create(agent)
        .then(data => res.status(201).json(data))
        .catch(err => console.log(err));
    });
}

exports.edit_agent = (req, res, next) => {
    const id = req.params.id;
    const agent = req.body;
    Agent.update(agent, {
        where: {
            id: id
        }
    })
    .then(agentEdited => res.status(201).json(agentEdited))
    .catch(err => console.log(err))
}

exports.delete_agent = (req, res, next) => {
    const id = req.params.id;
    const agent = req.body;
    Agent.destroy(agent, {
        where: {
            id: id
        }
    })
    .then(agentDeleted => res.status(201).json({message:"Agent deleted"}))
    .catch(err => console.log(err))
}

exports.agent_login = (req, res, next) => {
    Agent.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(agent => {
        if(agent) {
            bcrypt.compare(req.body.pwd, agent.pwd, (err, result) => {
                if(err) res.status(500).json(err);
                else {
                    if(result) {
                        const token = jwt.sign({email: agent.email, name: agent.name}, process.env.SECRET_PHRASE, {expiresIn: '24h'});
                        res.status(200).json({token: token});
                    }
                    else {
                        res.status(500).json({message: 'You fail'});
                    }
                }
            });
        }
        else {
            res.status(404).json({message: 'Bad login / pwd'});
        }
    })
    .catch(err => res.status(500).json(err));
}
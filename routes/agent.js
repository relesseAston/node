const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const agentController = require('../controllers/agent.controller');
router.get('/',agentController.agent_list);
router.get('/:id',agentController.detail_agent)
router.post('/register',agentController.register_agent);
router.post('/login', agentController.agent_login);
router.put('/:id',auth(),agentController.edit_agent);
router.delete('/:id',auth(),agentController.delete_agent);

module.exports = router
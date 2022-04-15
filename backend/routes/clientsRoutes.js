const express = require('express');
const client = require('../controllers/clientController');
const router = express.Router();


router.get('/', client.getAllClients);
router.route('/:id')
    .get(client.getOneClient)
    .put(client.editClient);
router.post('/', client.postClient);
router.delete('/:id', client.deleteClient);

module.exports = router;



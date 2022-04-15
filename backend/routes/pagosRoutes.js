const express = require('express');
const pago = require('../controllers/pagosController');
const router = express.Router();


router.get('/', pago.getAllPagos);
router.route('/:id')
    .get(pago.getOnePago)
    .put(pago.editPago);
router.post('/', pago.postPagos);
router.delete('/:id', pago.deletePago);

module.exports = router;

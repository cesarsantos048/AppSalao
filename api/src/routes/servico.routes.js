const express = require('express');
const router = express.Router();
const Salao = require('../models/salao');
const Servico = require('../models/servico');

router.post('/', async (req, res) => {
    try {
        const servico = await new Servico(req.body).save();
        res.json({ servico })
    } catch (err) {
        res.json({error: true, message: err.message })
    }
});


router.get('/', async (req, res) => {
    try {
        const servico = await Servico.find();
        res.json({ servico })
    } catch (err) {
        res.json({error: true, message: err.message })
    }
});


module.exports = router
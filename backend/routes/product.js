const { Router } = require('express');
const router = Router();

const pool = require('../databse');
router.get('/product', (req, res) => res.json({text: 'hola loco'}));

module.exports = router;
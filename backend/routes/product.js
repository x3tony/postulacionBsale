const express = require('express');
const router = express.Router();
const pool = require('../databse');

router.get('/', async(req, res) => {
    const pro = await pool.query('SELECT * FROM product');
    res.json(pro);
});

router.get('/:name', async(req, res) =>{
    nameBuscado = req.params.name;
    const pro = await pool.query(`SELECT * FROM product WHERE (name LIKE "${nameBuscado}%" OR name LIKE "%${nameBuscado}%") `);
    res.json(pro);
})

module.exports = router;
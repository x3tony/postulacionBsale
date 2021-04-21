const express = require('express');
const router = express.Router();
const pool = require('../databse');

router.get('/', async(req, res) => {
    const pro = await pool.query('SELECT * FROM category');
    res.json(pro);
});

router.get('/:id', async(req, res) =>{
    categoriaBuscada = req.params.id;
    const pro = await pool.query(`SELECT * FROM product WHERE category = ${categoriaBuscada}`);
    res.json(pro);
})


module.exports = router;
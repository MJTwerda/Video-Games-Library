const express = require('express');
const router = express.Router();
 
const {Platform} = require('../db.js');

router.get('/', async (req, res) => {
    try {
        let platformsDataBase = await Platform.findAll({
            attributes: ['id', 'name']
        });

        res.json(platformsDataBase);
    } catch(err) {
        res.send(err)
    }
});

module.exports = router;

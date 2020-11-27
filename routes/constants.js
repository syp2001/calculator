const { constants } = require('buffer');
const express = require('express');
const crud = require('../crud');

var router = express.Router();



router.get('/top', async (req,res) => {
    try{
        const constant = await crud.topConstants();
        res.send(constant);
    }
    catch(err){
        console.error(err);
        res.status(500)
    }
})

router.get('/:id', async (req,res) => {
    try{
        const constant = await crud.getConstant(req.params.id);
        res.send(constant);
    }
    catch(err){
        console.error(err);
        res.status(500).send();
    }
})

module.exports = router;
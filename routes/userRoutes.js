const express = require('express');
const userController = require('./../controllers/userController');


const router = express.Router();


router.get('/',(req,res)=>{
    res.send('welcome');
})

module.exports = router;
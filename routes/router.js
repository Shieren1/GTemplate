const express = require('express');
const router = express.Router();
const sma = require('../controller/sma_controller');


router.get('/', sma.index);
//router.post('/save', sma.save);


module.exports = router;

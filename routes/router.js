const express = require('express');
const router = express.Router();
const sma = require('../controller/sma_controller');


router.get('/', sma.index);
//router.post('/save', sma.save);
router.get('/products', sma.products);
router.get('/prodlist', sma.prodlist);


module.exports = router;

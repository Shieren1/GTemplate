const express = require('express');
const router = express.Router();
const sma = require('../controller/sma_controller');


router.get('/', sma.index);
router.get('/products', sma.products);
//sample ay ganto router.get('/cart', sma.cart);
//router.post('/save', sma.save);


module.exports = router;

const express = require('express');
const router = express.Router();
const sma = require('../controller/sma_controller');


router.get('/', sma.index);
router.get('/products', sma.products);

//router.post('/save', sma.save);
router.get('/prodDetail', sma.prodDetail);


module.exports = router;

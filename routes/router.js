const express = require('express');
const router = express.Router();
const sma = require('../controller/sma_controller');


router.get('/', sma.index);
router.get('/products', sma.products);

//router.post('/save', sma.save);
router.get('/prodDetail', sma.prodDetail);
router.get('/myacc', sma.myacc);
router.get('/login', sma.login);
router.get('/register', sma.register);


module.exports = router;

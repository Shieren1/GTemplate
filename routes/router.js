const express = require('express');
const router = express.Router();
const sma = require('../controller/sma_controller');


router.get('/', sma.index);
<<<<<<< Updated upstream
//router.post('/save', sma.save);
router.get('/products', sma.products);
router.get('/prodlist', sma.prodlist);
=======
router.get('/products', sma.products);

//router.post('/save', sma.save);
<<<<<<< HEAD

router.get('/prodDetail', sma.prodDetail);
router.get('/checkkout', sma.checkkout);
=======
router.get('/prodDetail', sma.prodDetail);
>>>>>>> 6cde140bc4f6d7b5b7eb761863f06169b0eb8e35
>>>>>>> Stashed changes


module.exports = router;

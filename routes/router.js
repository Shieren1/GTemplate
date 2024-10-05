const express = require('express');
const router = express.Router();
const sma = require('../controller/sma_controller');


router.get('/', sma.login);
router.get('/products', sma.products);
router.get('/prodDetail', sma.prodDetail);
router.get('/myacc', sma.myacc);
router.get('/home', sma.index);
router.get('/register', sma.register);
router.get('/checkout', sma.checkout);
router.get('/contact', sma.contact);
router.get('/wishlist', sma.wishlist);
router.get('/cart', sma.cart);
router.get('/addprod', sma.addprod);
router.post('/register', sma.saveUser);
router.post('/login', sma.loginUser);



module.exports = router;

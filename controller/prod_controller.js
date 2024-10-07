const multer = require('multer');
const path = require('path');
const Product = require('../models/prod_info');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/prod_img'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });

const kdmc = {

    addprod: (req, res) => {
        res.render('addprod');
    },

    addProductPost: (req, res) => {
        const { prodName, prodDesc, category, quantity, price } = req.body;
        const prod_img = req.file.filename;

        const user_id = req.session.userId; 
        if (!user_id) {
            return res.status(401).send('Unauthorized: User not logged in');
        }

        Product.addProduct(user_id, prodName, prodDesc, category, quantity, price, prod_img, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error adding product');
            } else {
                res.redirect('/products'); 
            }
        });
    },
    displayProducts: (req, res) => {
        const page = parseInt(req.query.page) || 1; 
        const limit = 12; 
        const offset = (page - 1) * limit;

        Product.getPaginatedProducts(limit, offset, (err, products) => {
            if (err) {
                return res.status(500).send('Error fetching products');
            }

            Product.getProductCount((err, totalProducts) => {
                if (err) {
                    return res.status(500).send('Error fetching product count');
                }

                const totalPages = Math.ceil(totalProducts / limit);

                res.render('Products', {
                    products,
                    currentPage: page,
                    totalPages
                });
            });
        });
    },
};

module.exports = {
    addprod: kdmc.addprod,
    addProductPost: kdmc.addProductPost,
    upload: upload,
    displayProducts: kdmc.displayProducts
};

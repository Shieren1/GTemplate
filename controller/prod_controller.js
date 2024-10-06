const multer = require('multer');
const path = require('path');
const Product = require('../models/prod_info');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img'); // Save images in 'public/img' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to image filename
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
        
        // Use user_id from the session, assuming it's set after login
        const user_id = req.session.userId; 

        // Check if user_id exists in session
        if (!user_id) {
            return res.status(401).send('Unauthorized: User not logged in');
        }

        Product.addProduct(user_id, prodName, prodDesc, category, quantity, price, prod_img, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error adding product');
            } else {
                res.redirect('/products'); // Redirect to products page after successful addition
            }
        });
    }
};

module.exports = {
    addprod: kdmc.addprod,
    addProductPost: kdmc.addProductPost,
    upload: upload
};

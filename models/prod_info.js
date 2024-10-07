const db = require('../config/database');

const Product = {
    // Insert a new product into the database
    addProduct: (user_id, prodname, prod_desc, category, quantity, price, prod_img, callback) => {
        const query = `INSERT INTO product (user_id, prodname, prod_desc, category, quantity, price, prod_img) 
                       VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [user_id, prodname, prod_desc, category, quantity, price, prod_img], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        });
    },

    // Retrieve products from the database with pagination
    getPaginatedProducts: (limit, offset, callback) => {
        const query = 'SELECT * FROM product LIMIT ? OFFSET ?';
        db.query(query, [limit, offset], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },

    // Count the total number of products
    getProductCount: (callback) => {
        const query = 'SELECT COUNT(*) AS count FROM product';
        db.query(query, (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result[0].count);
        });
    }
};

module.exports = Product;

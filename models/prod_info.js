const db = require('../config/database');

const Product = {
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

    getPaginatedProducts: (limit, offset, callback) => {
        const query = 'SELECT * FROM product LIMIT ? OFFSET ?';
        db.query(query, [limit, offset], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },

    getProductCount: (callback) => {
        const query = 'SELECT COUNT(*) AS count FROM product';
        db.query(query, (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result[0].count);
        });
    },

    getProductCountByCategory: (callback) => {
        const query = `
            SELECT category, COUNT(*) AS count 
            FROM product 
            GROUP BY category`;
        db.query(query, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    }
};

module.exports = Product;

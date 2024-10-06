const db = require('../config/database');

const Product = {
    addProduct: (user_id, prodname, prod_desc, category, quantity, price, prod_img, callback) => {
        const query = `INSERT INTO product (user_id, prodname, prod_desc, category, quantity, price, prod_img) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [user_id, prodname, prod_desc, category, quantity, price, prod_img], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        });
    }
};

module.exports = Product;

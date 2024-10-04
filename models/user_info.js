const db = require('../config/database');

const info = {
    save: (data, callback) => {
        const sql = `
            INSERT INTO user_info (
                firstname, lastname, email, contact, gender, country, 
                province, city, barangay, sitio, zip_code, passwords
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                data.firstname, data.lastname, data.email, data.contact, 
                data.gender, data.country, data.province, data.city, 
                data.barangay, data.sitio, data.zip_code, data.passwords
            ],
            callback
        );
        
    },
        findByEmail: (email, callback) => {
            const sql = 'SELECT * FROM user_info WHERE email = ?';
            db.query(sql, [email], (err, results) => {
                if (err) return callback(err, null);
                if (results.length === 0) return callback(null, null); 
                return callback(null, results[0]); 
            });
        }
    };

module.exports = info;

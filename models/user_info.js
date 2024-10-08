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
            (err, results) => {
                if (err) {
                    console.error('Error saving user data:', err);
                    return callback(err);
                }
                callback(null, results); 
            }
        );
    },
    
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM user_info WHERE email = ?';
        db.query(sql, [email], (err, results) => {
            if (err) return callback(err, null);
            if (results.length === 0) return callback(null, null); 
            return callback(null, results[0]); 
        });
    },

    findById: (userId, callback) => {
        const sql = 'SELECT * FROM user_info WHERE user_id = ?';
        db.query(sql, [userId], (err, results) => {
            if (err) return callback(err, null);
            if (results.length === 0) return callback(null, null);
            return callback(null, results[0]); 
        });
    },

    update: (userId, updatedData, callback) => {
        const sql = `
            UPDATE user_info
            SET firstname = ?, lastname = ?, email = ?, contact = ?, gender = ?, country = ?, 
                province = ?, city = ?, barangay = ?, sitio = ?, zip_code = ?
            WHERE user_id = ?
        `;

        db.query(
            sql,
            [
                updatedData.firstname, updatedData.lastname, updatedData.email, updatedData.contact,
                updatedData.gender, updatedData.country, updatedData.province, updatedData.city,
                updatedData.barangay, updatedData.sitio, updatedData.zip_code, userId
            ],
            (err, results) => {
                if (err) {
                    console.error('Error updating user data:', err);
                    return callback(err);
                }
                callback(null, results);
            }
        );
    }
};

module.exports = info;

const info = require('../models/user_info'); 
const bcrypt = require('bcrypt');

const ams = {
  index: (req, res) => {
    res.render('index');
  },
  
  products: (req, res) => {
    res.render('products');
  },
  
  prodDetail: (req, res) => {
    res.render('prodDetail');
  },
  
  myacc: (req, res) => {
    res.render('myacc');
  },
  
  login: (req, res) => {
    res.render('login');
  },
  
  register: (req, res) => {
    res.render('register');
  },
  
  checkout: (req, res) => {
    res.render('checkout');
  },
  
  contact: (req, res) => {
    res.render('contact');
  },
  
  wishlist: (req, res) => {
    res.render('wishlist');
  },
  
  cart: (req, res) => {
    res.render('cart');
  },

  saveUser: (req, res) => {
    const data = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      contact: req.body.contact,
      gender: req.body.gender,
      country: req.body.country,
      province: req.body.province,
      city: req.body.city,
      barangay: req.body.barangay,
      sitio: req.body.sitio,
      zip_code: req.body.zip_code,
      passwords: req.body.passwords
    };

    bcrypt.hash(data.passwords, 10, (err, hash) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).send('Internal Server Error');
      }

      data.passwords = hash; 
      info.save(data, (err) => {
        if (err) {
          console.error('Error saving user:', err);
          return res.status(500).send('Internal Server Error');
        }
        res.redirect('/'); 
      });
    });
  },

  loginUser: (req, res) => {
    const { email, password } = req.body;

    info.findByEmail(email, (err, user) => {
      if (err) {
        console.error('Error during login:', err);
        return res.status(500).send('Internal Server Error');
      }
      if (!user) {
        return res.status(401).send('Invalid email or password');
      }

      bcrypt.compare(password, user.passwords, (err, isMatch) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          return res.status(500).send('Internal Server Error');
        }
        if (isMatch) {
          return res.redirect('/home');
        } else {
          return res.status(401).send('Invalid email or password');
        }
      });
    });
  }
};

module.exports = ams;

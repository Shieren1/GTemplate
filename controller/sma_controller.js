const info = require('../models/user_info'); 
const db = require('../config/database'); // Ensure you have the db connection
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

  addprod: (req, res) => {
    res.render('addprod');
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

  initSession: (app) => {
    app.use(expressSession({
      secret: 'yourSecretKey', // Change this to a secret key
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false } // Set secure to true if using https
    }));
  },

  myacc: (req, res) => {
    // Check if user is logged in
    if (!req.session.userId) {
      return res.redirect('/login'); // Redirect to login if not logged in
    }

    // Fetch user info using the user ID stored in the session
    info.findById(req.session.userId, (err, user) => {
      if (err) {
        console.error('Error fetching user info:', err);
        return res.status(500).send('Internal Server Error');
      }
      res.render('myacc', { user }); // Pass user info to the template
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
          req.session.userId = user.user_id; // Store user ID in session
          logUserLogin(user.user_id, req.ip, req.get('User-Agent')); // Log the login
          return res.redirect('/home');
        } else {
          return res.status(401).send('Invalid email or password');
        }
      });
    });
  }
};

// Function to log user login
const logUserLogin = (userId, ipAddress, userAgent) => {
  const sql = `
      INSERT INTO user_logins (user_id, ip_address, user_agent) 
      VALUES (?, ?, ?)
  `;
  db.query(sql, [userId, ipAddress, userAgent], (err) => {
      if (err) {
          console.error('Error logging user login:', err);
      }
  });
};

module.exports = ams;

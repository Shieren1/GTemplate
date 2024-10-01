const info = require('../models/user_info');


const ams = {
    index:(req, res)=>{
        res.render('index');

    },
<<<<<<< Updated upstream
=======

<<<<<<< HEAD
    },
=======
>>>>>>> 6cde140bc4f6d7b5b7eb761863f06169b0eb8e35


>>>>>>> Stashed changes
    // save:(req, res)=>{
    //     const data = req.body;
    //     info.save(data, (err)=>{
    //         if (err) throw err;
    //         res.redirect('./');
    //     })
       
    // }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    products:(req, res)=>{
        res.render('products');

    },
    prodlist:(req, res)=>{
        res.render('prodlist');

    },
    checkkout:(req, res)=>{
        res.render('checkkout');

    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

};

module.exports = ams;


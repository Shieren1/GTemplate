const info = require('../models/user_info');


const ams = {
    index:(req, res)=>{
        res.render('index');

    },
    products:(req, res)=>{
        res.render('products');

    }


    // save:(req, res)=>{
    //     const data = req.body;
    //     info.save(data, (err)=>{
    //         if (err) throw err;
    //         res.redirect('./');
    //     })
       
    // }
<<<<<<< Updated upstream
=======
    products:(req, res)=>{
        res.render('products');

    },
    prodDetail:(req, res)=>{
        res.render('prodDetail');

    }
>>>>>>> Stashed changes

};

module.exports = ams;


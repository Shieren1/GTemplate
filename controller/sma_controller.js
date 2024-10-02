const info = require('../models/user_info');


const ams = {
    index:(req, res)=>{
        res.render('index');

    },
    products:(req, res)=>{
        res.render('products');

    },
    prodDetail:(req, res)=>{
        res.render('prodDetail');

    },
    myacc:(req, res)=>{
        res.render('myacc');

    },
    login:(req, res)=>{
        res.render('login');

    },
    register:(req, res)=>{
        res.render('register');

    }


    // save:(req, res)=>{
    //     const data = req.body;
    //     info.save(data, (err)=>{
    //         if (err) throw err;
    //         res.redirect('./');
    //     })
       
    // }




};

module.exports = ams;


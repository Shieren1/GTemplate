const info = require('../models/user_info');


const ams = {
    index:(req, res)=>{
        res.render('index');

    },



    // save:(req, res)=>{
    //     const data = req.body;
    //     info.save(data, (err)=>{
    //         if (err) throw err;
    //         res.redirect('./');
    //     })
       
    // }

    products:(req, res)=>{
        res.render('products');

    },
    prodDetail:(req, res)=>{
        res.render('prodDetail');

    }


};

module.exports = ams;


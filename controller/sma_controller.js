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

};

module.exports = ams;


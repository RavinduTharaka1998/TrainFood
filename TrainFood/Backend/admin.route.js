const express = require('express');
const adminRoutes = express.Router();

let Orders = require('./order.model');

adminRoutes.route('/adminorders/:id').get(function (req, res){

    let station = req.params.id;
    console.log("your station is "+station);
    Orders.find({$and:[{station : station}]},function (err,ord){
        if(err)
            console.log(err);
        else{
            res.json(ord)
        }
    });
});

module.exports = adminRoutes;
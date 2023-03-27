const express = require('express');
const adminRoutes = express.Router();

let Orders = require('./order.model');

adminRoutes.route('/adminorders/').get(function (req, res){

    Orders.find(function (err,order){
        if(err)
            console.log(err);
        else{
            res.json(order);
        }
    });
});

module.exports = adminRoutes;
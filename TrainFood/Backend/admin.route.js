const express = require('express');
const adminRoutes = express.Router();

let Orders = require('./order.model');
let Foods = require('./food.model');

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

adminRoutes.route('/adminassigndeliver/:id').post(function (req,res){
    let id = req.params.id;
    Orders.findById(id, function (err, orders){
        if(!orders)
            res.status(404).send("Data is not found??");
        else{
            
            orders.deliveryby = req.body.deliveryby;


            orders.save().then(orders => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


adminRoutes.route('/adminaddfood').post(function (req,res){
    let foods = new Foods(req.body);
    foods.save()
        .then(foods => {
            res.status(200).json({'food' : 'customer is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

adminRoutes.route('/adminfood/:id').get(function (req, res){

    let station = req.params.id;
    console.log("your station is "+station);
    Foods.find({$and:[{station : station}]},function (err,food){
        if(err)
            console.log(err);
        else{
            res.json(food)
        }
    });
});

adminRoutes.route('/adminfoodedit/:id').get(function (req,res){
    let id = req.params.id;
    Foods.findById(id, function (err,foods){
        res.json(foods);
    });
});

adminRoutes.route('/adminfoodupdate/:id').post(function (req,res){
    let id = req.params.id;
    Foods.findById(id, function (err, foods){
        if(!foods)
            res.status(404).send("Data is not found??");
        else{
            foods.foodname = req.body.foodname;
            foods.price = req.body.price;
            foods.size = req.body.size;
            foods.station = req.body.station;


            foods.save().then(foods => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

adminRoutes.route('/admindeleteFood/:id').get(function(req,res){
    Foods.findByIdAndRemove({_id:req.params.id}, function (err, foods){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});


module.exports = adminRoutes;
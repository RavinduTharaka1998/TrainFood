const express = require('express');
const adminRoutes = express.Router();

let Orders = require('./order.model');
let Foods = require('./food.model');
let Delivers = require('./deliver.model');
let Trains = require('./train.model');


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

adminRoutes.route('/adminadddeliver').post(function (req,res){
    let delivers = new Delivers(req.body);
    //alert("deliver backend called");
    delivers.save()
        .then(delivers => {
            res.status(200).json({'deliver' : 'deliver is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

adminRoutes.route('/admindeliver/:id').get(function (req, res){

    let station = req.params.id;
    console.log("your station is "+station);
    Delivers.find({$and:[{station : station}]},function (err,food){
        if(err)
            console.log(err);
        else{
            res.json(food)
        }
    });
});

adminRoutes.route('/admindeliveredit/:id').get(function (req,res){
    let id = req.params.id;
    Delivers.findById(id, function (err,delivers){
        res.json(delivers);
    });
});

adminRoutes.route('/admindeliverupdate/:id').post(function (req,res){
    let id = req.params.id;
    Delivers.findById(id, function (err, delivers){
        if(!delivers)
            res.status(404).send("Data is not found??");
        else{
            delivers.name = req.body.name;
            delivers.phone = req.body.phone;
            delivers.nic = req.body.nic;
            delivers.station = req.body.station;


            delivers.save().then(delivers => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

adminRoutes.route('/admindeleteDeliver/:id').get(function(req,res){
    Delivers.findByIdAndRemove({_id:req.params.id}, function (err, foods){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});


adminRoutes.route('/adminaddtrain').post(function (req,res){
    let trains = new Trains(req.body);
    trains.save()
        .then(trains => {
            res.status(200).json({'train' : 'train is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

adminRoutes.route('/admintrain/:id').get(function (req, res){

    let station = req.params.id;
    console.log("your station is "+station);
    Trains.find({$and:[{station : station}]},function (err,train){
        if(err)
            console.log(err);
        else{
            res.json(train)
        }
    });
});

adminRoutes.route('/admintrainedit/:id').get(function (req,res){
    let id = req.params.id;
    Trains.findById(id, function (err,trains){
        res.json(trains);
    });
});

adminRoutes.route('/admintrainupdate/:id').post(function (req,res){
    let id = req.params.id;
    Trains.findById(id, function (err, trains){
        if(!trains)
            res.status(404).send("Data is not found??");
        else{
            trains.name = req.body.name;
            trains.arrival = req.body.arrival;
            trains.deparcher = req.body.deparcher;
            trains.station = req.body.station;


            trains.save().then(trains => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

adminRoutes.route('/admindeleteTrain/:id').get(function(req,res){
    Trains.findByIdAndRemove({_id:req.params.id}, function (err, trains){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});



//search function implement
adminRoutes.route('/adminorderssearch/:pathParam1?/:pathParam2?').get(function (req, res){
    let search = req.params.pathParam1;
    let station = req.params.pathParam2;
    console.log("your search is "+search);
    console.log("your search is "+station);
   
    Orders.find({$and:[{$or: [{date: search}, {trainname: search},{email: search},{phone: search},{deliveryby: search}]},{station: station}]},function (err,srch){ 
   
        if(err)
            console.log(err);
        else{
            res.json(srch)
        }
    });
});

adminRoutes.route('/adminsearchdeliver/:pathParam1?/:pathParam2?').get(function (req, res){
    let search = req.params.pathParam1;
    let station = req.params.pathParam2;
    console.log("your search is "+search);
    console.log("your search is "+station);
   
    Delivers.find({$and:[{$or: [{name: search}, {phone: search},{nic: search}]},{station: station}]},function (err,srch){ 
   
        if(err)
            console.log(err);
        else{
            res.json(srch)
        }
    });
});

adminRoutes.route('/adminsearchtrain/:pathParam1?/:pathParam2?').get(function (req, res){
    let search = req.params.pathParam1;
    let station = req.params.pathParam2;
    console.log("your search is "+search);
    console.log("your search is "+station);
   
    Trains.find({$and:[{$or: [{name: search}, {arrival: search},{deparcher: search}]},{station: station}]},function (err,srch){ 
   
        if(err)
            console.log(err);
        else{
            res.json(srch)
        }
    });
});

adminRoutes.route('/adminsearchfood/:pathParam1?/:pathParam2?').get(function (req, res){
    let search = req.params.pathParam1;
    let station = req.params.pathParam2;
    console.log("your search is "+search);
    console.log("your search is "+station);
   
    Foods.find({$and:[{$or: [{foodname: search}, {price: search},{size: search}]},{station: station}]},function (err,srch){ 
   
        if(err)
            console.log(err);
        else{
            res.json(srch)
        }
    });
});


module.exports = adminRoutes;
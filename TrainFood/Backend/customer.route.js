const express = require('express');
const customerRoutes = express.Router();


let Customers = require('./customer.model');
let Orders = require('./order.model');

customerRoutes.route('/add').post(function (req,res){
    let customers = new Customers(req.body);
    customers.save()
        .then(customers => {
            res.status(200).json({'customer' : 'customer is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

customerRoutes.route('/addorder').post(function (req,res){
    let orders = new Orders(req.body);
    orders.save()
        .then(orders => {
            res.status(200).json({'order' : 'order is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

customerRoutes.route('/:id').get(function (req, res){
    let email = req.params.id;
    console.log(email);
    Customers.findOne({$and:[{email : email}]},function (err,cus){
        if(err)
            console.log(err);
        else{
            res.json(cus)
        }
    });

});


customerRoutes.route('/myorders/:id').get(function (req, res){
    let email = req.params.id;
    console.log("your email is "+email);
    Orders.find({$and:[{email : email}]},function (err,ord){
        if(err)
            console.log(err);
        else{
            res.json(ord)
        }
    });

});


customerRoutes.route('/orderEdit/:id').get(function (req,res){
    let id = req.params.id;
    Orders.findById(id, function (err,orders){
        res.json(orders);
    });
});

customerRoutes.route('/orderUpdate/:id').post(function (req,res){
    let id = req.params.id;
    Orders.findById(id, function (err, orders){
        if(!orders)
            res.status(404).send("Data is not found??");
        else{
            orders.foodname = req.body.foodname;
            orders.trainname = req.body.trainname;
            orders.station = req.body.station;
            orders.qty = req.body.qty;
            orders.date = req.body.date;
            orders.price = req.body.price;
            orders.phone = req.body.phone;
            orders.email = req.body.email;
            orders.payment = req.body.payment;
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

customerRoutes.route('/deleteOrder/:id').get(function(req,res){
    Orders.findByIdAndRemove({_id:req.params.id}, function (err, orders){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});


customerRoutes.route('/orderPayment/:id').post(function (req,res){

    let id = req.params.id;
    Orders.findById(id, function (err, order){
        if(!order)
            res.status(404).send("Data is not found??");
        else{
            order.payment = "completed!";

            order.save().then(order => {
                res.json('Update Completed');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


customerRoutes.route('/login').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    let customers = new Customers(req.body);

    Customers.findOne({$and:[{email : email},{password : password}]})
        .then(customers => {
            if(customers){
                customers.name = req.body.name;
                res.status(200).send({
                    message: "Successful Login"
                });
            }
            else{
                res.status(200).send({
                    message: "User Not Found"
                });
            }
        })
});



module.exports = customerRoutes;
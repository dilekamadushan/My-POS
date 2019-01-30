// /userOrder requests are forwarded to these endpoints from the relevant routes file
const mongoose = require("mongoose");

const UserOrder = require("../models/userOrder");

exports.userOrders_get_all = (req, res, next) => { //get all userOrders (carts)
    UserOrder.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                userOrders: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        createdDate: doc.date,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/userOrders/" + doc._id
                        }
                    };
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.userOrders_get_userOrder = (req, res, next) => { //get details of a userOrder
    UserOrder.findById(req.params.userOrderId)
        .populate("product")
        .exec()
        .then(order => {
            if (!order) {
                return res.status(404).json({
                    message: "UserOrder not found"
                });
            }
            res.status(200).json({
                order: order,
                request: {
                    type: "GET",
                    url: "http://localhost:3000/orders"
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.userOrders_delete_userOrder = (req, res, next) => { //delete a userOrder
    UserOrder.remove({_id: req.params.userOrderId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "UserOrder deleted",
                request: {
                    type: "POST",
                    url: "http://localhost:3000/userOrders",
                    body: {productId: "ID"}
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.userOrders_create_userOrder = (req, res, next) => { //add a userOrder into the database
    const userOrder = new UserOrder({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
    userOrder
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created userOrder successfully",
                createdUserOrder: {
                    name: result.name,
                    _id: result._id,
                    createdDate: result.date,
                    request: {
                        type: "GET",
                        url: "http://localhost:3000/userOrders/" + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
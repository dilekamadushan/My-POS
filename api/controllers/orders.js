// /order requests are forwarded to these endpoints from the relevant routes file
const mongoose = require("mongoose");

const Order = require("../models/order");
const Product = require("../models/product");

exports.orders_get_all = (req, res, next) => {
    Order.find()
        .select("product quantity _id")
        .populate("product", "name")
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json({
                count: docs.length,
                orders: docs.map(doc => {
                    return {
                        _id: doc._id,
                        product: doc.product,
                        quantity: doc.quantity,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/orders/" + doc._id
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

exports.orders_create_order = (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                res.status(500).json({
                    error: "Product not found"
                });
            }
            console.log(req.body.userOrderId + ' ' + req.body.productId);
            //userOrderId: "5c3bc2f4fe5e56139ac248da" ,
            Order.find({userOrderId: req.body.userOrderId, product: req.body.productId})
                .then(docs => {
                    console.log('here', docs);
                    if (docs.length > 0) {
                        console.log('I found a doc' + docs[0]);
                        Order.findOneAndUpdate({_id: docs[0]._id}, {$inc: {quantity: req.body.quantity}}).then(updatedOrder => {
                            Order.populate(docs[0], {path: "product"}, function (err, newOrder) {

                                console.log('i am in the server' + newOrder);
                                res.status(201).json({
                                    message: "Order stored",
                                    createdOrder: {
                                        _id: updatedOrder._id,
                                        userOrderId: updatedOrder.userOrderId,
                                        product: updatedOrder.product,
                                        quantity: updatedOrder.quantity
                                    },
                                    request: {
                                        type: "GET",
                                        url: "http://localhost:3000/orders/" + updatedOrder._id
                                    }
                                });
                            });

                        }).catch(err => {
                            res.status(500).json({
                                error: "Product not found"
                            });
                        });

                    } else {
                        console.log('I did not find a doc' + req.body.userOrderId + ' ' + req.body.productId);
                        const order = new Order({
                            _id: mongoose.Types.ObjectId(),
                            quantity: req.body.quantity,
                            product: req.body.productId,
                            userOrderId: req.body.userOrderId
                        });
                        order.save().then(result => {
                            Order.populate(result, {path: "product"}, function (err, newOrder) {

                                console.log('i am in the server' + newOrder);
                                res.status(201).json({
                                    message: "Order stored",
                                    createdOrder: {
                                        _id: newOrder._id,
                                        product: newOrder.product,
                                        userOrderId: newOrder.userOrderId,
                                        quantity: newOrder.quantity
                                    },
                                    request: {
                                        type: "GET",
                                        url: "http://localhost:3000/orders/" + newOrder._id
                                    }
                                });
                            });

                        }).catch(err => {
                            res.status(500).json({
                                error: err
                            });

                        });
                    }


                })
                .catch(err => {
                    res.status(500).json({
                        errorIn3: err
                    });
                });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.orders_get_order = (req, res, next) => {
    Order.findById(req.params.orderId)
        .populate("product")
        .exec()
        .then(order => {
            if (!order) {
                res.status(404).json({
                    error: "Order not found"
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

exports.orders_delete_order = (req, res, next) => {
    Order.remove({_id: req.params.orderId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Order deleted",
                request: {
                    type: "POST",
                    url: "http://localhost:3000/orders",
                    body: {productId: "ID", quantity: "Number"}
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.orders_getOrders_by_userOrderId = (req, res, next) => {
    Order.find({userOrderId: req.params.userOrderId})
        .select("product quantity _id")
        .populate("product")
        .exec()
        .then(docs => {
            // console.log(docs);
            res.status(200).json({
                count: docs.length,
                orders: docs.map(doc => {
                    return {
                        _id: doc._id,
                        product: doc.product,
                        quantity: doc.quantity,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/orders/" + doc._id
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

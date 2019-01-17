const mongoose = require("mongoose");

const UserOrder = require("../models/userOrder");
const Product = require("../models/product");

exports.userOrders_get_all = (req, res, next) => {
  UserOrder.find()
    .select("_id name")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        userOrders: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
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

exports.userOrders_get_userOrder = (req, res, next) => {
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

exports.userOrders_delete_userOrder = (req, res, next) => {
  UserOrder.remove({ _id: req.params.userOrderId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "UserOrder deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/userOrders",
          body: { productId: "ID" }
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.userOrders_create_userOrder = (req, res, next) => {
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

/* exports.userOrders_add_product= (req, res, next) => {
  UserOrder.findById(req.params.userOrderId, (err, userOrder) => {
      if(err) {
        return res.status(404).json({
          message: err
        });
      }
      if(!userOrder) {
        return res.status(404).json({
          message: "UserOrder not found"
        });
      }

      let saveOrder = () => {
          userOrder.save((err3, savedUserOrder) => {
              res.jsonp({success: true, order: savedUserOrder});
          });
      }

          Product.findById(req.body.productId, (err2, product) => {
              if(!product) {
                return res.status(404).json({
                  message: err
                });
              } else {
                console.log(product);
                console.log(userOrder);
                console.log(userOrder.products)
                  userOrder.products.push(
                    { product:product._id,
                    quantity:req.body.quantity}                  );
                  userOrder.save((err3, savedUserOrder) => {
                    res.status(201).json({
                      message:savedUserOrder 
                    });
                });
              }
          });
  })
}; */

const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const UserOrdersController = require('../controllers/userOrders');

// Handle incoming requests to /userorders
router.get("/", UserOrdersController.userOrders_get_all);

router.post("/", UserOrdersController.userOrders_create_userOrder);

router.get("/:userOrderId", UserOrdersController.userOrders_get_userOrder);

router.delete("/:userOrderId", UserOrdersController.userOrders_delete_userOrder);


module.exports = router;
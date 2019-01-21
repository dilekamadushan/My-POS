const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const UserOrdersController = require('../controllers/userOrders');

// Handle incoming requests to /userorders
router.get("/", checkAuth, UserOrdersController.userOrders_get_all);

router.post("/", checkAuth, UserOrdersController.userOrders_create_userOrder);

router.get("/:userOrderId", checkAuth, UserOrdersController.userOrders_get_userOrder);

router.delete("/:userOrderId", checkAuth, UserOrdersController.userOrders_delete_userOrder);


module.exports = router;
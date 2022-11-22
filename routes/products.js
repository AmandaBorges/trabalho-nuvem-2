let express = require('express');
let router = express.Router();

const productController = require("../controllers/productController")

// GET product list
router.get('/', productController.index);

// GET individual product details
router.get('/:id', productController.show);

// GET product quantity to buy
router.get('/quantity/:id', productController.quantity);

module.exports = router;

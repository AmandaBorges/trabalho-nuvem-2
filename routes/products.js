let express = require('express');
let router = express.Router();

const productController = require("../controllers/productController")

// GET product list
router.get('/', productController.index);

// GET categories list
router.get('/categories', productController.categories);

// GET products list
router.get('/categories/products', productController.products);

// GET buy product list
router.get('/categories/products/:slug', productController.buyProduct);

// GET individual product details
router.get('/:id', productController.show);

// GET product quantity to buy
router.get('/quantity/:id', productController.quantity);

module.exports = router;

let express = require("express");
let router = express.Router();

const productController = require("../controllers/productController");
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/login', userController.login);

// GET product create form
router.get("/products/create", productController.create);

// POST create product
router.post("/products/create", productController.store);

// GET product list
router.get("/products", productController.list);

// DELETE delete product
router.delete("/products/:slug/delete", productController.delete);

module.exports = router;

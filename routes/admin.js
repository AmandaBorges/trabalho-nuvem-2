let express = require("express");
let router = express.Router();

const productController = require("../controllers/productController");

// GET product create form
router.get("/produto/criar", productController.createP);

// POST create product
router.post("/produto/criar", productController.store);

// GET product list
router.get("/produto", productController.list);

// POST delete product
router.post("/produto/deletar", productController.delete);

module.exports = router;

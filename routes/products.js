let express = require('express');
let router = express.Router();

const productController = require("../controllers/productController")

/* GET products listing. */
router.get('/', productController.index);

module.exports = router;

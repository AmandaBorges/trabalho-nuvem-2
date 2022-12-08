var express = require("express");
var router = express.Router();

//controlador Amanda
const enderecoController = require("../controllers/enderecoContoller");

// controlador Luiz Felipe
const productController = require("../controllers/productController");

/* GET home page. */
router.get("/", enderecoController.home);

/* GET my address page. */
router.get("/address-by-zip-code", enderecoController.addressByZipCode);

/* GET my cep page. */
router.get("/zip-code-by-address", enderecoController.zipCodeByAddress);

/* GET my address by zip code json. */
router.get("/api/address-by-zip-code", enderecoController.getZipCode);

/* GET my zip code by adress json. */
router.get("/api/zip-code-by-address", enderecoController.getAddress);

module.exports = router;

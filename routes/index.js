var express = require('express');
var router = express.Router();

const enderecoController = require('../controllers/enderecoContoller');

/* GET home page. */
router.get('/', enderecoController.home);

/* GET home page. */
router.get('/amanda-routes', enderecoController.routes);

/* GET my address page. */
router.get('/address-by-zip-code', enderecoController.addressByZipCode);

/* GET my cep page. */
router.get('/zip-code-by-address', enderecoController.zipCodeByAddress);

/* GET my address by zip code json. */
router.get('/api/address-by-zip-code', enderecoController.getZipCode);

/* GET my zip code by adress json. */
router.get('/api/zip-code-by-address', enderecoController.getAddress);

module.exports = router;

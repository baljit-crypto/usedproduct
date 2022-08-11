var express = require('express');
var router = express.Router();

const ctrlProduct = require("../controllers/product");

router
.route('/product')
.get(ctrlProduct.getProductList)
.post(ctrlProduct.createProduct);


router
.route('/product/:productid')
.get(ctrlProduct.getSingleProduct)
.put(ctrlProduct.updateProduct)
.delete(ctrlProduct.deleteProduct)

router
.route('/product/:productid/available')
.put(ctrlProduct.updateProductAvailability)

module.exports = router;
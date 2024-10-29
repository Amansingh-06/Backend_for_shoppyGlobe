//product router

const express = require('express');
const {AddProduct} = require('../controller/product/AddProduct');
const { GetAllProduct } = require('../controller/product/GetAllProduct');
const { getbyId } = require('../controller/product/GEtbyId');

const router = express.Router();

router.post('/add', AddProduct);

router.get('/products', GetAllProduct)
router.get('/product/:id',getbyId)

module.exports = router;
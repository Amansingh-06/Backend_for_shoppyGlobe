const express = require('express');
const { CartData } = require('../controller/cart/AddtoCart');//add to cart
const { updateCart } = require('../controller/cart/UpdateCart');//update item to cart
const { DeleteCart } = require('../controller/cart/DeleteCart');//delete item to cart
const auth = require('../middlewares/auth');// middleware for cart
const { getAllitem } = require('../controller/cart/getAllitem');//all item of cart

const router = express.Router();//for routing


//mounting
router.post('/item',auth, CartData)
router.put('/item/:id', auth, updateCart)
router.delete('/item/:id',auth, DeleteCart)

router.get('/items',auth,getAllitem)

//export router
module.exports = router;
const mongoose = require('mongoose');
const product = require('../../model/ProductSchema')

exports.GetAllProduct = async (req, res) => {
    try {
        const response = await product.find({})
        res.status(200).json({
            success: true,
            data: response,
            msg:'Data Retrive'
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Data Not Retrive',
            error:error.msg
        })
        
    }
}
const cart = require('../../model/CartScema');//cart schema

exports.CartData = async (req, res) => {
    try {
        const { product_id, quantity } = req.body;
        const newItem = new cart({
            product_id,
            quantity 
        })
        const NewCartitem = await newItem.save();
        res.status(201).json({
            success: true,
            data: NewCartitem,
            msg:'Added item Successfully'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Failed to add item',
            error:error.message
        })
        
    }
}
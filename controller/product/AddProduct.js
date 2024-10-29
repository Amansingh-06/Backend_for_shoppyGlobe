const product = require('../../model/ProductSchema') //product achema

exports.AddProduct = async (req, res) => {
    try {
        const { name, price, description, stock } = req.body;
        const newProduct = new product({
            name,
            description,
            price,
            stock,
        })
        const SavedProduct = await newProduct.save();
        res.status(201).json({
            success: true,
            data: SavedProduct,
            msg: 'Product added succesfully'
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Failed to Add Product',
            error:error.message
        })
        
    }
}

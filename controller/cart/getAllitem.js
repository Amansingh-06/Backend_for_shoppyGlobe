const cart = require('../../model/CartScema')// cart schema


exports.getAllitem = async (req, res) => {
    try {
        const items = await cart.find({})
        res.status(200).json({
            success: true,
            data: items,
            msg: 'Data Retrive'
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Data Not Retrive',
            error: error.msg
        })
        
    }
}
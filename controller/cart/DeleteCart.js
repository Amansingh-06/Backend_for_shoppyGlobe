const cart = require('../../model/CartScema');

exports.DeleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteitem = await cart.findByIdAndDelete(id)

        if (deleteitem) {
            res.status(200).json({
                success: true,
                msg:'Item Deleted Successfully'
                
            })
        } else {
            res.status(404).json({
                success: false,
                msg:'User not find'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Internal server Error',
            error:error.message
        })
        
    }
}


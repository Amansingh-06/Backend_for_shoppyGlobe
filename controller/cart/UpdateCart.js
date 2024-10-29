
const cart = require('../../model/CartScema');

exports.updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const cartItem = await cart.findByIdAndUpdate(
            id,
            { $set: { quantity: quantity } }, 
            { new: true }
        )
       
        if (cartItem) {
            return res.status(200).json({
                success: true,
                data: cartItem,
                msg:'Update Successfully'
                })
            
        } else {
            return res.status(404).json({
                succes: false,
                msg:"Item not Founded"
            })
            }

    } catch (error) {
        res.status(500).json({
            succes: false,
            msg: "Internal Server Error",
            error:error.message
        })

    }
}
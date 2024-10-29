const product = require('../../model/ProductSchema');


exports.getbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await product.findById(id)

        if (!data) {
            return res.status(404).json({
                success: false,
                msg: "Data Not Found"
            });
        } else {
            return res.status(200).json({
                success: true,
                data: data,
                msg:'Data Found Successfully'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Server Error',
            error: error.message
        })
        
    }
}



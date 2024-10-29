const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./../model/UserSchema'); // Ensure the path is correct
require('dotenv').config(); // Load environment variables

// Function to generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.secretkey, { expiresIn: '1h' });
};

// Login function
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: "Invalid email or password"
            });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                msg: "Invalid email or password"
            });
        }

        // Generate the token
        const token = generateToken(user._id);

        // Respond with success and the token
        res.status(200).json({
            msg: "Logged in successfully",
            token: token
        });

    } catch (error) {
        res.status(500).json({
            msg: "Server Error",
            error: error.message
        });
    }
};

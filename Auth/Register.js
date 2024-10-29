const bcrypt = require('bcrypt');
const User = require('../model/UserSchema'); // Ensure correct path

// Register function to create a new user
const Register = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save new user
        const newUser = new User({
            email,
            password: hashedPassword
        });
        await newUser.save();

        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        res.status(500).json({
            msg: "Server error",
            error: error.message
        });
    }
};

module.exports = Register;

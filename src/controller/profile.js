// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admission = require('../models/profile');

async function createProfile(req, res) {
    try {
        const userData = req.body;

        // Generate a random password
        const password = Math.random().toString(36).slice(2).toUpperCase().slice(2);

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user object
        const newUser = new Admission({
            _id: new mongoose.Types.ObjectId(),
            password: hashedPassword,
            ...userData
        });

        // Set username
        newUser.username = `enq-wws-${newUser._id}`;

        // Send registration email
        // await sendRegistrationEmail(newUser.primary_email_id, newUser.username, password);

        // Save user to the database
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(500).json({ message: `An error occurred while registering the user: ${error}` });
    }
}

async function login(req, res) {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('Login failed');
        }
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Login failed');
        }
        // Generate JWT token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ user, token });
    } catch (error) {
        res.status(400).send({ error: 'Invalid username or password' });
    }
}

async function profileDetails(req,res){
    try {
        return res.status(200).json({ statusCode:200,message: 'profile details' });
    } catch (error) {
        res.status(400).send({ error: 'Profile Details Not Found' });
    }
} 

module.exports = {
    createProfile,
    login,
    profileDetails
};

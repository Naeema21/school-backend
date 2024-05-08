const jwt = require('jsonwebtoken');
const User = require('../modle/auth');

async function auth(req, res, next) {
    // Extract token from request headers
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        // Verify token and find user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate' });
    }
}

module.exports = auth;
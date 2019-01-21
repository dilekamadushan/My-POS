// middleware to check whether the user is valid (const token = req.headers.authorization.split(" ")[1];)

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        req.userData = jwt.verify(token, "SECRET");
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
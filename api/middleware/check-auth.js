// middleware to check whether the user is valid (const token = req.headers.authorization.split(" ")[1];)

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        let cookieString = req.headers.cookie;
        cookieString = cookieString.split("=")[1];
        const decoded = jwt.verify(cookieString, "SECRET");
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
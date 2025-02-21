const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            console.log(decoded)
            return next(); 
        } catch (error) {
            return res.status(401).json({ error: "Not authorized, invalid token" });
        }
    } else {
        return res.status(401).json({ error: "Not authorized, no token" });
    }
};

module.exports = { protect };

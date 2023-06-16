const jwt = require("jsonwebtoken");
const secretTokenJWT = process.env.jwtSecret
const modelUser = require("../db/models/user.js");

module.exports = {
    authUser: authUser
}

async function authUser(req, res, next) {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, secretTokenJWT);
        const user = await modelUser.findOne({_id: decoded._id});
        if(!user) {
            throw new Error("Unauthorized")
        }
        req.user = user;
        next();
    } catch(e) {
        console.log(e)
        res.status(401).send("Unauthorized")
    }
}
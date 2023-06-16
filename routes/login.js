const modelUser = require("../db/models/user.js");
const jwt = require("jsonwebtoken");


module.exports = {
    path: "/login",
    fn: loginFunction,
    method: "POST",
}

function loginFunction(req, res) {
    const data = req.body;
    modelUser.findOne({"username": data.username, "password": data.password}).then((user) => {
        if(!user) {
            return res.status(401).send("Unauthorized")
        }
        const token = jwt.sign({_id: user._id.toString()}, process.env.jwtSecret);
        res.send({
            "username": user.username,
            "token": token,
        });
    }).catch((e) => {
        console.log(e)
        res.status(401).send("Unauthorized")
    })
}
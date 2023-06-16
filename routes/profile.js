const modelUser = require("../db/models/user.js");

module.exports = {
    path: "/profile",
    fn: registerFunction,
    auth: true,
    method: "GET",
}

function registerFunction(req, res) {
    return res.send({
        "username": req.user.username,
        "email": req.user.email,
    });
}
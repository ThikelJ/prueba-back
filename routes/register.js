const modelUser = require("../db/models/user.js");

module.exports = {
    path: "/register",
    fn: registerFunction,
    method: "POST",
}

async function registerFunction(req, res) {
    try {
    const data = req.body;
    const user = new modelUser(data);
    userData = await user.save()
    res.send(userData);
    } catch(e) {
        console.log(e)
        res.status(401).send(e.toString())
    }
}
const mongoose = require('mongoose');

const mongodbURI = process.env.mongodbURI 

module.exports = {
    connect: connect
}

async function connect () {

const connect = await mongoose.connect(mongodbURI);
console.log("status: connected to mongodb", connect.connection.db.databaseName)

} 
const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/Login-tut", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Check database connected or not
connect.then(() => {
    console.log(" Database Connected Successfully");
})
.catch((err) => {
    console.log(" Database connection failed:", err);
});

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create collection (model)
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;

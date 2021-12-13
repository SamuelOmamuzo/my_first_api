const mongoose = require("mongoose");
const Goodluck = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
},{
    timestamps:true,
},
);

module.exports = mongoose.model("goody", Goodluck)
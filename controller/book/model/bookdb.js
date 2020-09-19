const mongoose = require('mongoose');

var bookSchema =new mongoose.Schema({
    name :{
        type:String,
        required: true
    },
    author :{type:String}
},
{timestamps :true}
);
module.exports = mongoose.model('book',bookSchema)
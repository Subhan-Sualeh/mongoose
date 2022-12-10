const mongoose = require("mongoose")

const schema = mongoose.Schema({
   name:{
        type:String,
        required:true
   },
   description:{
    type:String,
   },
   price:{
    type:Number,
    min:0
   },
   quantity:{
    type:Number,
    min:0
   }

},
    {
        timestamps:true
    }

)

const product = mongoose.model( "product", schema)

module.exports = product
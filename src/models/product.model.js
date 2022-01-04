const mongoose = require("mongoose")

const productShema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number, required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("product",productShema)
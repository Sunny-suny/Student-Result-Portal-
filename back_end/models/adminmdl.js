let mongoose=require("mongoose")
let admsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String
})
let am=mongoose.model("admin",admsch)
module.exports=am
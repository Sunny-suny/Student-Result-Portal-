let mongoose=require("mongoose")
let u_schema=new mongoose.Schema({
    "_id":String,
    "name":String,
    "dob":Date,
    "gen":String,
    "phno":Number,
    "email":String,
    "photo":String,
    "tel":Number,
    "hn":Number,
    "eg":Number,
    "m":Number,
    "s":Number,
    "sc":Number
})
let u_model=mongoose.model("sunny",u_schema)
module.exports=u_model
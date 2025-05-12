const u_model = require("../models/usermodel")
let multer=require("multer")

let add_std=async(req,res)=>{
    // console.log("reg data",req.file)
    try{
        let rn=Math.floor(Math.random()*99999+10000)
        let data=new u_model({...req.body,"_id":rn,"photo":req.file.filename})
        await data.save()
        res.json({"msg":"registeration succesfull"})
        
    }
    catch(err)
    {
        console.log(err.message)
        res.json({"err":"error in register"})
    }
}

let gethltkt=async(req,res)=>{
    let data=await u_model.find({[req.params.optn]:req.params.val})
    res.json(data)
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './photos')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })

let upld_marks=async(req,res)=>{
    try{
        await u_model.findByIdAndUpdate({"_id":req.body._id},req.body)
        res.json({"msg":"uploaded marks"})
    }
    catch(err)
    {
        res.json({"err":"error in uploading marks"})
    }
}

let get_results=async(req,res)=>{
    try{
        // console.log("okget")
        let data=await u_model.findById({"_id":req.params.hno})
        res.json(data)
    }
    catch(err)
    {
        res.json({"err":"error in fetching results"})
    }
}

let get_std=async(req,res)=>{
    try{
        let data=await u_model.find()
        res.json(data)
    }
    catch(err){
        res.json({"err":"error in fetching stds"})
    }
    
}

let del=async(req,res)=>{
    try{
        await u_model.findByIdAndDelete({"_id":req.params.hno})
        res.json({"msg":"deleted"})
    }
    catch(err){
        res.json({"err":"error in delete"})
    }
}

module.exports={add_std,upload,upld_marks,get_results,gethltkt,get_std,del}
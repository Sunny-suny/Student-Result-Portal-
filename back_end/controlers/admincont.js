const am = require("../models/adminmdl")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let admreg=async(req,res)=>{
    try{
        let pwdhash=await bcrypt.hash(req.body._id,10)
        let data=new am({...req.body,"pwd":pwdhash})
        await data.save()
        res.json({"msg":"admin register is done"})
    }
    catch(err){
        res.json({"err":"error in admin register"})
    }    
}

let admlogin=async(req,res)=>{
    try{
        let obj=await am.findById(req.body._id)
        if(obj)
        {
            // console.log(obj)
            let f=bcrypt.compare(req.body.pwd,obj.pwd)
            // console.log(f)
            if(f){
                res.json({"token":jwt.sign({"_id":obj._id},"1234"),"name":obj.name})
            }
            else{
                res.json({"msg":"check password"})
            }
            
        }
        else{
            res.json({"msg":"check ID"})
        }
    }
    catch(err)
    {
        console.log(err.message)
        res.json({"err":"error in admin login"})
    }
}

let islogin=async(req,res,next)=>{
    try{
        jwt.verify(req.headers.authorization,"1234")
        next()
    }
    catch(err){
        res.json({"err":"plz login"})
    }
}

module.exports={admreg,admlogin,islogin}
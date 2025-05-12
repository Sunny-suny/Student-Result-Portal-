let bodyParser=require("body-parser")
let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
const u_route = require("./routes/userroute")


mongoose.connect("mongodb://127.0.0.1:27017/resultportaldb").then(()=>{
    console.log("ok")
}).catch((err)=>{
    console.log(err)
})
let app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({"extended":true}))
app.use(cors())
app.use("/pic",express.static("./photos"))
app.use("/",u_route)
app.listen(5000)
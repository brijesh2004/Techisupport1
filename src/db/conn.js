const mongoose = require("mongoose");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://brijesh122004:MongoDBFirst@cluster0.vfdrzlq.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("no connection");
})
mongoose.connect("mongodb://localhost:27017/Studentregistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("no connection");
})
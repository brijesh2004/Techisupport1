const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://brijesh122004:MongoDBFirst@cluster0.vfdrzlq.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("no connection");
})

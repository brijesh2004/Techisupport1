const express= require("express");
const app = express();
const path = require("path")
const hbs = require('hbs');
const port = process.env.PORT || 8000;
// public static path 

const staticPAth = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
// console.log(path.join(__dirname , "../templates/partials"));
const partial_path= path.join(__dirname , "../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
// hbs.registerPartial('headPartial', 'navbar');  
hbs.registerPartials(partial_path);

app.use(express.static(staticPAth));


 
// routing 
app.get( "/" ,(req,res)=>{
    res.render("index");
})
app.get( "/about" ,(req,res)=>{
    res.render("about");
})

app.get( "/weather" ,(req,res)=>{
    res.render("weather");
})
app.get( "*" ,(req,res)=>{
    res.render("404error");
})

app.listen(port ,() => {
    console.log(`Listenning on ${port}`);
});
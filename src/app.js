const express= require("express");
const app = express();
const path = require("path")
const hbs = require('hbs');
var nodemailer = require('nodemailer');
const port = process.env.PORT ||5000;
const hostname="0.0.0.0" 
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

app.get( "/login" ,(req,res)=>{
    res.render("login");
})
 
app.get( "/sourcecode" ,(req,res)=>{
    res.render("sourcecode");
})

app.get( "/video" ,(req,res)=>{
    res.render("video");
})
app.get( "/C_CPP" ,(req,res)=>{
    res.render("C_CPP");
})
app.get( "/DSASheet" ,(req,res)=>{
    res.render("DSASheet");
})
app.get( "/JAVA" ,(req,res)=>{
    res.render("JAVA");
})
app.get( "/templates/views/sourceCode/greeting" ,(req,res)=>{
    res.render("sourceCode/greeting");
})
app.get( "/templates/views/sourceCode/movingcircle" ,(req,res)=>{
    res.render("sourceCode/movingcircle");
})
app.get( "/templates/views/sourceCode/searchimage" ,(req,res)=>{
    res.render("sourceCode/searchimage");
})
app.get( "*" ,(req,res)=>{
    res.render("404error");
})

app.listen(port ,() => {
    console.log(`Listenning on ${port}`);
});
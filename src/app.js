const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
require("./db/conn");
const Register = require("./models/register");
const path = require("path")
const hbs = require('hbs');
var nodemailer = require('nodemailer');
const port = process.env.PORT || 5000;
const hostname = "0.0.0.0"
// public static path 

const staticPAth = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
// console.log(path.join(__dirname , "../templates/partials"));
const partial_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// hbs.registerPartial('headPartial', 'navbar');  
hbs.registerPartials(partial_path);

app.use(express.static(staticPAth));



// routing 
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/login", (req, res) => {
    res.render("login");
})

// register the student

app.post("/RegisterStudent" , async(req,res)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const cpassword = req.body.confirmPassword;
        // console.log(name + " "+ email +" "+  password +" "+ cpassword);
        // console.log("hello world" +name);
        if(password=== cpassword){
            const registerStudent = new Register({
                Fullname: name,
                email: email,
                password:password ,
                confirmpassword:cpassword
            })
            const registed =  await registerStudent.save();
           res.status(201).render("about");
        }
        else{
            res.send("password are not matching")
        }
    }
    catch(e){
        res.status(400).send(e);
    }
})

// login the user 
app.post("/loginStudent", async(req,res) =>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        // console.log(email + " "+ password);
        const userEmail = await Register.findOne({email:email});
        // res.send(userEmail);
        // console.log(userEmail);
        if(userEmail.password === password){
            res.status(201).render("about");
        }
        else{
            res.send("invalid user");
        }

    } catch (error) {
        res.status(400).send("Invalid user ");
    }
})

app.get("/sourcecode", (req, res) => {
    res.render("sourcecode");
})
app.get("/send", (req, res) => {
    // res.render("sourcecode");

    // res.send(req.query);


    //feching the data from form
    let email = req.query.mail;
    let addtional = req.query.addtional;
    const mail = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    });
    mail.sendMail({
        from: process.env.email,
        to: email,
        subject: 'Feedback',
        html: "Thanks for your feedback <br>" + addtional
    }, (err) => {
        if (err) throw err;
        res.send('Thanks For your feed back')


    })
})

app.get("/video", (req, res) => {
    res.render("video");
})
app.get("/C_CPP", (req, res) => {
    res.render("C_CPP");
})
app.get("/DSASheet", (req, res) => {
    res.render("DSASheet");
})
app.get("/JAVA", (req, res) => {
    res.render("JAVA");
})
app.get("/templates/views/sourceCode/greeting", (req, res) => {
    res.render("sourceCode/greeting");
})
app.get("/templates/views/sourceCode/movingcircle", (req, res) => {
    res.render("sourceCode/movingcircle");
})
app.get("/templates/views/sourceCode/searchimage", (req, res) => {
    res.render("sourceCode/searchimage");
})
app.get("/templates/views/sourceCode/AnalogClock", (req, res) => {
    res.render("sourceCode/AnalogClock");
})
app.get("/templates/views/sourceCode/ferriesWheel", (req, res) => {
    res.render("sourceCode/ferriesWheel");
})
app.get("/templates/views/sourceCode/MovingSquare", (req, res) => {
    res.render("sourceCode/MovingSquare");
})
app.get("/templates/views/sourceCode/DivMoveWithCursor", (req, res) => {
    res.render("sourceCode/DivMoveWithCursor");
})
app.get("/templates/views/sourceCode/SumValidator", (req, res) => {
    res.render("sourceCode/SumValidator");
})
app.get("/templates/views/sourceCode/ExpandingCards", (req, res) => {
    res.render("sourceCode/ExpandingCards");
})
app.get("/templates/views/sourceCode/hoberBox", (req, res) => {
    res.render("sourceCode/hoberBox");
})
app.get("/templates/views/sourceCode/Pop_balloon", (req, res) => {
    res.render("sourceCode/Pop_balloon");
})
app.get("/templates/views/sourceCode/digitalClock", (req, res) => {
    res.render("sourceCode/digitalClock");
})
app.get("/templates/views/sourceCode/toggleDarkMode", (req, res) => {
    res.render("sourceCode/toggleDarkMode");
})

app.get("/templates/views/sourceCode/CssWave", (req, res) => {
    res.render("sourceCode/CssWave");
})
app.get("*", (req, res) => {
    res.render("404error");
})

app.listen(port, () => {
    console.log(`Listenning on ${port}`);
});
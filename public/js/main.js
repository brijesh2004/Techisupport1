
var nodemailer = require('nodemailer');
   
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brijesh122004@gmail.com',
    pass: 'hfjzodijgbbpdfcu'
  }
});

var mailOptions = {
  from: 'brijesh122004@gmail.com',
  to: 'ashwanikumar29707@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hello ashwani'
};
 
function SendEmail(){

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})  
};
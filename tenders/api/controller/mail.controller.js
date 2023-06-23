import nodemailer from 'nodemailer';

function sendEmail(email,password)
{

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vilekhofficial@gmail.com',
    pass: 'xjyfavsvcfbrfqvr'
  }
});

var mailOptions = {
  from: 'vilekhofficial@gmail.com',
  to: email,
  subject: 'Verification Email Tenders',
  html: "<h1>Welcome to Tenders</h1><a>You have successfully register to our application , your login credentials are attached below</a><h2>Username : "+email+"</h2><h2>Password : "+password+"</h2>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

export default sendEmail();
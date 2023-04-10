import nodemailer from 'nodemailer';

//implement nodemailer
const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'Test email',
    text: 'This is a test email from nodemailer.'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
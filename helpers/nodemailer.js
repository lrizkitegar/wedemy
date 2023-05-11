const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = async (title, studentEmail) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: `xdragonfly11.steam@hotmail.com`, // generated ethereal user
      pass: `Cr0n0sph3r3`, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'WEDEMY <xdragonfly11.steam@hotmail.com>', // sender address
    to: `${studentEmail}`,//"rhyzq.dprogramerz@gmail.com", 
    subject: "Enroll Success ✔", // Subject line
    text: `New Course "${title}" successfully Enrolled. `, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
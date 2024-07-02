
import nodeMailer from "nodemailer";
const sendMail = async (req, res) => {
    let testAccount = await nodeMailer.createTestAccount();

    // connect with smtp

    let transporter = await nodeMailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        // secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: 'leonardo41@ethereal.email',
        pass: '1XGNAfsmdvNR94hQEf'
        },
      });
    
      let info = await transporter.sendMail({
        from: '"Shryu 👻" <radha@gmail.com>', // sender address
        to: "shryu@gmail.com, baz@example.com", // list of receivers
        subject: "Hello Shryu", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s",info.messageId);
      res.json(info);
    // res.send("I am sending mail");
};

export default sendMail;

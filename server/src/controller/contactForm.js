const errorHandler = require("../middleware/errorHandler");
const nodemailer = require("nodemailer");

const nodePass = process.env.NODEMAILER_PASS

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.NODEMAILER_USER,
        pass: nodePass
    },
});


// Contact me
const contactMe = errorHandler(async (req, res) => {
    const { firstName, lastName, email, phoneNo, message } = req.body;
    await transporter.sendMail({
        from: process.env.NODEMAILER_USER, // sender address
        to: process.env.NODEMAILER_RECIVER, // list of receivers
        subject: `${firstName} need to talk.`, // Subject line
        text: "Hello world?", // plain text body
        html: ` <h1>${firstName} is tring to contact you..</h1><p>${message} </p><p> Name : ${firstName} ${lastName} </p><p> Phone No. : <a href="tele:${phoneNo}">${phoneNo}</a></p><p> Email : <a href="mailto:${email}">${email}</a> </P>`, // html body
    });

    res.status(201).json({
        message: "Thankyou!! We revcived your message... we will reach you soon."
    })
});


module.exports = { contactMe }
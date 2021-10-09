const nodeMailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth: {
        api_key:'4586e9bbfb190ecd36d36e79f5eca116-443ec20e-de583da3',
        domain:'sandbox8d47cfd122dc44728b53a79c60093681.mailgun.org'
    }
};
const transporter = nodeMailer.createTransport(mailGun(auth));
function sendMail(email, subject, message, cb) {
    const mailOptions = {
        from : email,
        to : "ahujatejas06@gmail.com",
        subject : subject,
        text : message
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    });
}
module.exports = sendMail
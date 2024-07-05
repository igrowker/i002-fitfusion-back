import HttpStatusCode from '../enums/HttpStatusCode.js';

import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {
    const email = process.env.email
    const emailPass = process.env.email_password

    try {
        const { to, subject, text } = req.body;

        console.log('req.body ' , req.body)

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: email,
            pass: emailPass,
          },
        });
      
        const mailOptions = {
          from: email,
          to,
          subject: `${subject} : CONTACT EMAIL FITFUSION`,
          text,
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log( 'EMAIL ERROR: ' ,  error)
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error sending email' });
          }
          res.status(HttpStatusCode.OK).send('Email sent: ' + info.response);
        });
      

    } catch (error) {
        return res.status(error.status || HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message || 'Internal server error' });
    }
};

import HttpStatusCode from '../enums/HttpStatusCode.js';

import nodemailer from 'nodemailer';

const email = process.env.email
const emailPass = process.env.email_password

export const sendEmail = async (req, res) => {


    try {
        const { to, subject, text } = req.body;

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: email,
            pass: emailPass,
          },
        });
      
        const mailOptions = {
          from: email,
          to : 'nmacenco@hotmail.com',
          subject: `${subject} : CONTACT EMAIL FITFUSION ${to}`,
          text,
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error sending email' });
          }
          res.status(HttpStatusCode.OK).send('Email sent: ' + info.response);
        });
      

    } catch (error) {
        return res.status(error.status || HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message || 'Internal server error' });
    }
};


export const sendPurchaseConfirmationEmail = async (userEmail, payment) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: emailPass,
    },
  });
  const mailOptions = {
    from: email,
    to: userEmail,
    subject: 'Confirmación de Pago - FitFusion',
    html: `
      <div>
        <h1>Confirmación de Pago</h1>
        <p>Hola,</p>
        <p>Gracias por tu pago. Aquí están los detalles de tu clase:</p>
        <ul>
          <li>ID de la Clase: ${payment.ClassId}</li>
          <li>Fecha de la Clase: ${payment.ClassDate}</li>
          <li>Estado del Pago: ${payment.Status}</li>
          <li>Total: ${payment.Amount}</li>
        </ul>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error sending email' });
  }
};
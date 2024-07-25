import PaymentsService from "../services/PaymentsService.js";
import HttpStatusCode from "../enums/HttpStatusCode.js";
import Payment from "../models/Payment.js";
import StripeService from "../services/StripeService.js";
import Class from "../models/Class.js";
import ClassTime from "../models/ClassTime.js";
import { sendPurchaseConfirmationEmail } from "./services.controller.js";

export const createPayment = async (req, res) => {
  try {
    const { ClassId, UserId, Amount, Status, ClassTimeId, ClassDate } = req.body;
    const userEmail = req.user.email;

    // Validar fecha
    const date = new Date(ClassDate);
    if (isNaN(date.getTime())) {
      return res.status(HttpStatusCode.BAD_REQUEST).json({ message: "Invalid ClassDate" });
    }
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');

    // Validación de entrada
    if (!ClassId || !UserId || !Amount || !Status || !ClassTimeId || !ClassDate) {
      return res.status(HttpStatusCode.BAD_REQUEST).json({ message: "All fields are required" });
    }

    const payment = await PaymentsService.createPayment({
      ClassId,
      UserId,
      Amount,
      Status,
      ClassTimeId,
      ClassDate: formattedDate
    });

    try {
          // Obtener detalles de la clase
    const classDetails = await Class.findByPk(ClassId);

    // Enviar correo de confirmación
    await sendPurchaseConfirmationEmail(userEmail, {
      ...payment,
      ClassId,
      ClassTitle: classDetails.Title,
      ClassDate: date.toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }),
      Status,
      Amount
    });
    } catch (error) {
      console.log(error)
    }


    return res.status(HttpStatusCode.CREATED).json(payment);
  } catch (error) {
    console.error("Error creating payment:", error);
    if (error.status === HttpStatusCode.CONFLICT) {
      return res.status(HttpStatusCode.CONFLICT).json({ message: error.message });
    }
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Clase ya reservada por el usuario' });
  }
};

export const createPaymentStripe = async (req, res) => {
  try {
    const { ClassId, UserId, Amount } = req.body;

    // Validación de entrada
    if (!ClassId || !UserId || !Amount) {
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ message: 'All fields are required' });
    }

    // Crear un PaymentIntent de Stripe
    const paymentIntent = await StripeService.createPaymentIntent(Amount * 100); // Multiplica por 100 para convertir a centavos

    // Crear un registro de pago en tu base de datos
    const payment = await PaymentsService.createPayment({
      ClassId,
      UserId,
      Amount,
      Status: 'Pending', // Inicialmente marcado como pendiente
      PaymentIntentId: paymentIntent.id, // Almacena el ID del PaymentIntent
    });

    return res.status(HttpStatusCode.CREATED).json({
      payment,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment:', error);
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: 'Failed to create payment' });
  }
};

export const getPaymentsUser = async (req, res) => {
  try {
    const { id } = req.params;
    const payments = await Payment.findAll({
      where: {
        UserId: id,
      },
      include : [
        {
          model: Class
        },
        {
          model : ClassTime,
          attributes : ['Time']
        }
      ] 
    });
    if (!payments) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ message: "Payments Not Found" });
    }
    return res.status(HttpStatusCode.OK).json(payments);
  } catch (error) {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

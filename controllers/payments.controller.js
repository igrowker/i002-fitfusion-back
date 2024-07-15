import PaymentsService from "../services/PaymentsService.js";
import HttpStatusCode from "../enums/HttpStatusCode.js";
import Payment from "../models/Payment.js";
import Class from "../models/Class.js";

export const createPayment = async (req, res) => {
  try {
    const { ClassId, UserId, Amount, Status, ClassTimeId, ClassDate  } = req.body;

    const date = new Date(ClassDate);
    const formatDate = date.toISOString().slice(0, 19).replace('T', ' ');

    // Validación de entrada
    if (!ClassId || !UserId || !Amount || !Status) {
      console.log("Invalid input data:", req.body);
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ message: "All fields are required" });
    }
    console.log("Valid input data:", { ClassId, UserId, Amount, Status });

    const payment = await PaymentsService.createPayment({
      ClassId,
      UserId,
      Amount,
      Status,
      ClassTimeId,
      ClassDate : formatDate
    });
    console.log("Payment created:", payment);
    return res.status(HttpStatusCode.CREATED).json(payment);
  } catch (error) {
    console.error("Error creating payment:", error);
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to create payment" });
  }
};

export const getPaymentsUser = async (req, res) => {
  try {
    const { id } = req.params;
    const payments = await Payment.findAll({
      where: {
        UserId: id,
      },
      include : {
        model: Class
      }
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

import completedClassService from "../services/CompletedClassService.js";
import HttpStatusCode from "../enums/HttpStatusCode.js";

export const markClassAsCompleted = async (req, res) => {
    const { id } = req.params;
    const { UserId } = req.body;

    try {
        const completedClass = await completedClassService.markClassAsCompleted(UserId, Number(id));
        return res.status(HttpStatusCode.OK).json(completedClass);
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};
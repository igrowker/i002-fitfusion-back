import User from '../models/User.js';
import HttpStatusCode from '../enums/HttpStatusCode.js';

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.userId; // Obtener el ID del usuario del token decodificado
        const user = await User.findByPk(userId, {
            attributes: { exclude: ['Password'] }, // Excluir la contraseña de la respuesta
        });

        if (!user) {
            return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'User not found' });
        }

        return res.status(HttpStatusCode.OK).json(user);
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
    }
};

export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user.userId; // Obtener el ID del usuario del token decodificado
        const updatedData = req.body; // Datos actualizados enviados en el cuerpo de la solicitud

        // Encuentra al usuario en la base de datos
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'User not found' });
        }

        // Actualiza la información del usuario
        await user.update(updatedData);

        return res.status(HttpStatusCode.OK).json({ message: 'User updated successfully', user });
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
    }
};
import UserService from '../services/UserService.js';
import HttpStatusCode from '../enums/HttpStatusCode.js';


export const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.userId;
        const user = await UserService.getUserProfile(userId);
        if (!user) {
            return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'User not found' });
        }
        return res.status(HttpStatusCode.OK).json(user);
    } catch (error) {
        return res.status(error.status || HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message || 'Internal server error' });
    }
};

export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user.userId;
        const updatedData = req.body;
        
        const user = await UserService.updateUserProfile(userId, updatedData);
        if (!user) {
            return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'User not found' });
        }
        return res.status(HttpStatusCode.OK).json({ message: 'User updated successfully', user });
    } catch (error) {
        return res.status(error.status || HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message || 'Internal server error' });
    }
};
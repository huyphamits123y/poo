const pool = require('../pool')
const UserService = require('../services/UserService')
require('dotenv').config()
const getAllUsers = async (req, res) => {
    try {
        const data = await UserService.getAllUsers();
        return res.status(200).json(data)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
module.exports = {
    getAllUsers,
}
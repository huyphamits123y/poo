const { pool } = require('../pool');

const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('result')
            const result = await pool.query('SELECT * FROM users');
            console.log('result', result.rows)
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: result.rows,
            });
        } catch (e) {
            console.error('Error:', e);
            reject(e);
        }
    });
};

module.exports = {
    getAllUsers,
};
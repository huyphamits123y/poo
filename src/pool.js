const { Pool } = require('pg');
require('dotenv').config()
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: `${process.env.database}`,
    password: `${process.env.password}`,
    port: `${process.env.port}`
})
module.exports = { pool }
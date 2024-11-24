const http = require('http');
const hostname = '127.0.0.1';
const express = require('express');
const { pool } = require('./pool');
const bodyParser = require('body-parser');
const port = 3001;
require('dotenv').config();
const routes = require('./routes');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);


app.listen(port, hostname, async () => {
    const result = await pool.query('select * from users')
    console.log(result.rows)
    console.log('app_id', `${process.env.password}`)
    console.log(`Server running at http://${hostname}:${port}/`);
});

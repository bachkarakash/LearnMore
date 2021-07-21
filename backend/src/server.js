const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({ path: '../config.env' });

require('./database/connection');
require('./models/user');
const router = require('./apiRoutes/routes');



const port = process.env.PORT;

const app = express();


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})


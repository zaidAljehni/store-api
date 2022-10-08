const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser);

const start = async () => {
    app.listen(process.env.PORT);
}

start();
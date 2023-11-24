const express = require("express");
const app = express();
const { getHash } = require("./hash");
const dotenv = require("dotenv");

dotenv.config({
    path: "./config/config.env"
});

app.listen(process.env.PORT, () => {
    console.log("Running on port "+process.env.PORT);
    getHash();
});
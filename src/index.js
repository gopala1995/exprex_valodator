const express = require("express")

const prodControler = require("./controlers/procuctCcontroler")

const app = express();

app.use("/products",prodControler)

app.use(express.json())

module.exports = app
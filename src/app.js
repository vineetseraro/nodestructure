const express = require('express');
const app = express();
const port = process.env.PORT ||3000;
const path = require('path');
const hbs = require('hbs');
const router = require("../router/router")
app.use(router)
require("../db/conn");

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`The app is listening at ${port}`);
})
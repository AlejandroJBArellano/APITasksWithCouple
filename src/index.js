require("dotenv").config();

const express = require("express"), 
morgan = require("morgan"),
router = require("routes.js")

app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router)

app.listen(app.get("port"), _ => console.log(`Server on port ${app.get("port")}`))

var express = require("express");

require("dotenv").config();
var PORT = process.env.PORT;

var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("Server is listening on Port " + PORT);
});
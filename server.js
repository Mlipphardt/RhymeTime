var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./routes/routes.js");

app.use(routes);

app.listen(PORT, () => {
  console.log("Sever live and listening on PORT " + PORT + "!");
});

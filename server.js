var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  connection.query("SELECT * FROM products;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { products: data });
  });
});

app.get("/ims", function(req, res) {
  connection.query("SELECT * FROM inventory;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("ims", { products: data });
  });
});

app.get("/inventory", function(req, res) {
  connection.query("SELECT * FROM inventory;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("inventory", { products: data });
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

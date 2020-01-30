var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  connection.query("SELECT * FROM inventory;", function(err, data) {
    if (err) {
      throw err;
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

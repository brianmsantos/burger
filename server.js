const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
// let connection = require("./config/connection.js")
// const router = require("./controllers/burger_controller.js")

const PORT = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
const routes = require("./controllers/burger_controller.js");
app.use(routes);

//Supposed to render all the burger_names here.
app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
            console.log("nopez");
        }
        res.render("index", { burgers: data });
    });
});
//add a new burger
app.post("/burgers", function(req, res) {
    connection.query("INSERT INTO burgers(burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
        if (err) {
            console.log("again nopez");
        }
    });
});

//This should return all the burgers too. 
app.get("/burgers", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
            return res.status(500).end();
        }
        res.json(data);
    });
});

//Updates the burgers
app.put("/burgers/:id", function(req, res) {
    connection.query("UPDATE burgers SET burger_names = ? WHERE id = ?", [req.body.burger_name, req.params.id], function(err, result) {
        if (err) {
            //Generic failure notice
            return res.status(500).end();
        } else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
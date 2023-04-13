require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const Flight = require("./models/Flight");

//& === CONFIGURATION
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//& === MIDDLEWARE
app.use(express.urlencoded({ extended: false }));

//& === ROUTES
/**
 * INDEX
 */
app.get("/", (req, res) => {
  Flight.find({}, (error, allFlights) => {
    res.render("Index", { flights: allFlights });
  });
});

/**
 * POST FLIGHT TO INDEX
 */
app.post("/", (req, res) => {
  Flight.create(req.body, (error, createdFlight) => {
    res.redirect("/");
  });
});

/**
 * ADD A NEW FLIGHT
 */
app.get("/new", (req, res) => {
  res.render("New");
});

/**
 * DISPLAY FLIGHT DETAILS
 */
app.get("/flight/:id", (req, res) => {
  Flight.findById(req.params.id, (error, foundFlight) => {
    res.render("Show", { flight: foundFlight });
  });
});

/**
 * PAGE NOT FOUND
 */
app.get("*", (req, res) => {
  res.render("404");
});

//& === LISTEN AT PORT
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server running at port ${PORT}...`);
  connectToDB();
  // console.log(new Flight);
});

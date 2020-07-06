var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const mongoose = require("mongoose");
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const mongoURI = "mongodb://localhost:27017/scooter";
mongoose.Promise = global.Promise;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


var Users = require("./routes/Users");
var dbScooter = require("./routes/dbscooter")

app.use("/users", Users);
app.use("/scooterdata", dbScooter);


app.listen(port, function () {
  console.log("Server is running on port: " + port);
});

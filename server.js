const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/puzzle_tracker"
);

app.listen(PORT, function() {
    console.log("Server is listening on " + {PORT})
});
console.log("Testing DB");
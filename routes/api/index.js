const router = require("express").Router();
const trackerRoutes = require("./tracker");
console.log("route api index loaded");
// Vehicle routes
router.use("/tracker", trackerRoutes);

module.exports = router;
const router = require("express").Router();
const controller = require("../../controllers/controller");
console.log("route api loaded")
// Matches with "/api/vehicles"
router
 .route("/")
 .get(controller.findAll)
 .post(controller.create)
 .delete(controller.remove);
 
module.exports = router;
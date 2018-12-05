const express = require("express");
const router = express.Router();

const location_controller = require("../controllers/location.controller");

router.get("/test", location_controller.test);

router.post("/create", location_controller.location_create);

router.get("/detail/:id", location_controller.location_details);

module.exports = router;

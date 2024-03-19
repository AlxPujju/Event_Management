const express = require("express");
const router = express.Router();
const event = require("../model/event");

const eventController = require("../controllers/events-controller");

router.get("/", eventController.getAllevent);
router.post("/", eventController.addevent);
router.get("/:id", eventController.getById);
router.put("/:id", eventController.updateevent);
router.delete("/:id", eventController.deleteevent);

module.exports = router;

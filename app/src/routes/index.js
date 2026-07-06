const express = require("express");
const router = express.Router();

const systemController = require("../controllers/systemController");

router.get("/", systemController.home);

router.get("/health", systemController.health);

router.get("/status", systemController.status);

router.get("/system", systemController.system);

router.get("/time", systemController.time);

module.exports = router;
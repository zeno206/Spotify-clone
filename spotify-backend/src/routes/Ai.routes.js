const express = require("express");
const aicontroller = require("../controllers/ai.controller");
const router = express.Router();

router.post("/Smarts", aicontroller.Aisearch);
router.get("/Podcast", aicontroller.Aipodcast);
router.get("/topbar", aicontroller.topbar);

module.exports = router;

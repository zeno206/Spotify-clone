const express = require("express");
const musiccontroller = require("../controllers/music.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post(
  "/uploadmusic",
  upload.single("music"),
  musiccontroller.Createmusic,
);
router.get("/getmusic", musiccontroller.addMusic);
module.exports = router;

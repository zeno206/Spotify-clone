const express = require("express");
const authrouter = require("./routes/auth.routes");
const chatboxrouter = require("./routes/chatbox.routes");
const Airouter = require("./routes/Ai.routes");
const musicrouter = require("./routes/music.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authrouter);
app.use("/api/music", musicrouter);
app.use("/api/ai", Airouter);
app.use("/api", chatboxrouter);
app.get("/api/Mainmusic", (req, res) => {
  res.status(200).json({
    songs: [
      {
        image:
          "https://i.scdn.co/image/ab67616d0000b2737774f89f7903126398d2d64f",
        music: "https://ik.imagekit.io/k5atleoa0/music_lghk2EcD0.mp3",
        title: "Soothie you breaken here",
      },
      {
        image:
          "https://c.saavncdn.com/321/Shades-of-Love-Hindi-Songs-Hindi-2020-20220831140044-500x500.jpg",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        title: "Your favourate music player we get overe...",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBjlJG87Qe1moc9M3H4cNTG2Js6kW1bEZVA&s",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        title: "Sit back with the bollywood music",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgjajmP5WMCIktHMk6nVnOo52MjSShnZrdA&s",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        title: "Jhoome Jo Pathaan",
      },
      {
        image:
          "https://images.squarespace-cdn.com/content/v1/5befb3b84611a081dd003798/1542447456369-C6IDY1DIB1A4GQ0JLZ2T/Ibrahim-final.jpg",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        title: "Late night cool & with these smooths",
      },
    ],
  });
});

module.exports = app;

import React, { useEffect, useState } from "react";
import axios from "axios";

function Podcast() {
  const [Podcastr, setPodcastr] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/ai/Podcast")
      .then((res) => {
        setPodcastr(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("cannot connect to podcast api");
      });
  }, []);

  return (
    <>
      <div className="p-main">
        {Podcastr.map((item) => (
          <div className="p-box" key={item.id.videoId}>
            <div className="pprt-1">
              <img
                className="pd-img"
                src={item.snippet.thumbnails.medium.url}
                alt=""
              />

              <p className="pd-p">{item.snippet.title}</p>
            </div>

            <div className="pprt-2"></div>

            <div className="pprt-3">
              <p className="pd-p2">{item.snippet.channelTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Podcast;

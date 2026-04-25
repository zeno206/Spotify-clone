import React, { useEffect, useState } from "react";
import axios from "axios";

function TopBar() {
  const [playlist, setplaylist] = useState([]);

  useEffect(() => {
    axios
      .get("https://spotify-clone-1j8u.onrender.com/api/ai/topbar")
      .then((res) => {
        setplaylist(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {playlist.map((item) => {
        return (
          <div className="topbarM" key={item.id.videoId}>
            <img
              className="bar-img"
              src={item.snippet.thumbnails.medium.url}
              alt=""
            />
            <p className="bar-p">{item.snippet.title}</p>
          </div>
        );
      })}
    </>
  );
}

export default TopBar;

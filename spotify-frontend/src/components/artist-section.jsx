import React from "react";
import { Form } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Music from "./music-components";

function Artistsection() {
  const [song, setsong] = useState("");
  const [title, settitle] = useState("");
  const [img, setimg] = useState("");
  const [pending, setpending] = useState(false);
  const [Cmusic, setCmusic] = useState([]);
  const images = [
    "https://picsum.photos/id/1011/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1035/300/300",
    "https://picsum.photos/id/1041/300/300",
    "https://picsum.photos/id/1050/300/300",
    "https://picsum.photos/id/1062/300/300",
  ];

  const getrandomimages = () => {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  };

  const getmusic = async () => {
    await axios
      .get("https://encrypted-tbn0.gstatic.com/api/music/getmusic")
      .then((res) => {
        console.log(res.data);
        setCmusic(res.data.music);
        console.log(setCmusic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getmusic();
  }, []);

  const token = localStorage.getItem("token");
  const submithandler2 = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    setpending(true);

    axios
      .post(
        "https://encrypted-tbn0.gstatic.com/api/music/uploadmusic",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        console.log(res.data);
        setpending(false);
        getmusic();
        console.log(res.data.token);
        console.log("music created sucessfully");
      })
      .catch((error) => {
        console.log(error);
        setpending(false);
        console.log("the music is not posted");
      });
  };
  return (
    <>
      <div className="artist-section">
        <div className="Abar1">
          <div className="apart-1">
            <img
              className="Aa-img"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
              alt=""
            />
            <h4 className="ah4">
              Create Your
              <span className="aspan">Music</span>
            </h4>
          </div>
          <div className="apart-2">
            <button className="f-btna">Explore premium</button>
            <i class="ri-notification-4-line"></i>
            <img
              className="pp-img"
              src="https://www.svgrepo.com/show/402071/letter-s.svg"
              alt=""
            />
          </div>
        </div>
        <div className="Abar2">
          <div className="ap-1">
            <div className="LLine-1a">
              <h2 className="YL">Add music</h2>
              <span className="AL-2">
                <i class="ri-add-large-line"></i>
              </span>
            </div>
            <form onSubmit={submithandler2} className="abox-1">
              <label>Add music</label>
              <label className="f-icn">
                <i class="ri-upload-2-line"></i>
              </label>
              <input name="music" type="file" className="pp" />
              <label>Add title</label>
              <input name="title" type="text" className="pp" />
              <button type="submit" className="abtn">
                <i class="ri-add-large-line"></i>
              </button>
            </form>

            {pending && (
              <div className="L-div">
                <img
                  className="p-L"
                  src="https://i.redd.it/1yuhedg0ruj71.gif"
                />
              </div>
            )}
          </div>
          <div className="ap-2">
            <div className="M-album-1">
              <h2 className="MY">My music</h2>
            </div>
            <div className="M-album-M">
              <div className="nbr">
                {Cmusic.map((m) => (
                  <div
                    className="Mdiv"
                    key={m._id}
                    onClick={() => {
                      setsong(m.uri);
                      settitle(m.title);
                      setimg(getrandomimages());
                    }}
                  >
                    <img className="rimage" src={getrandomimages()} alt="" />
                    <h3 className="Tt">{m.title}</h3>

                    <img
                      className="pp-icon"
                      src="https://cdn-icons-png.flaticon.com/512/8212/8212668.png"
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="box-3">
          <Music song={song} stitle={title} img={img} />
        </div>
      </div>
    </>
  );
}

export default Artistsection;

import React, { useState } from "react";
import Album1 from "./row1-components";
import Row2music from "./row2-component";
import { useNavigate } from "react-router-dom";
import Music1 from "./music1-component";
import axios from "axios";
import { useEffect } from "react";
import Podcast from "./podcast-component";
import { Content } from "openai/resources/skills.js";
import { useRef } from "react";
import TopBar from "./topbar";

function Homebar() {
  const [mymusic, setmymusic] = useState([]);
  const [Pmusic, setPmusic] = useState(null);
  const [Pimage, setPimage] = useState(null);
  const [Ptitle, setPtitle] = useState(null);
  const [reply, setreply] = useState("");
  const [msg, setmsg] = useState("");
  const [message, setmessage] = useState([]);
  const [Dsearch, setDsearch] = useState([]);
  const [Youtubesong, setYoutubesong] = useState([]);
  const [Musicbar, setMusicbar] = useState(true);
  const [Youtubebar, setYoutubebar] = useState(false);
  const [show, setshow] = useState(true);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show6, setshow6] = useState(false);
  const [show7, setshow7] = useState(false);
  const [showA, setshowA] = useState(false);
  const [show8, setshow8] = useState(false);

  const bottomref = useRef(null);

  useEffect(() => {
    bottomref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [message]);

  const getmusic = async () => {
    await axios
      .get("http://localhost:8000/api/Mainmusic")
      .then((res) => {
        setmymusic(res.data.songs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getmusic();
  }, []);

  const navigate = useNavigate();
  const Nbtn = () => {
    setTimeout(() => {
      navigate("/a");
    });
  };
  const searchsong = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const search = formdata.get("search");
    if (!search.trim()) {
      setshow8(false);
      setDsearch([]);
      return;
    }

    axios
      .post("http://localhost:8000/api/ai/Smarts", { search })
      .then((res) => {
        setDsearch(res.data);
        setshow8(true);
      })
      .catch((error) => {
        console.log(error);
        console.log("cannot connect to api");
      });
  };
  const chatboxM = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const prompt = formdata.get("prompt");

    setshow7(true);
    if (message.length === 0) {
      setshowA(false);
    }
    const usermsg = { role: "user", Content: prompt };
    setmessage((prev) => [...prev, usermsg]);
    e.target.reset();

    axios
      .post("http://localhost:8000/api/chatbox", { prompt })
      .then((res) => {
        setshow6(true);
        const data = res.data.reply;
        const aidata = { role: "ai", Content: data };
        setmessage((prev) => [...prev, aidata]);
      })
      .catch((error) => {
        console.log(error + "cannot get the data");
      });
  };

  const indianSongs1 = [
    {
      title: "Indian Folk",
      image: "https://i.scdn.co/image/ab67616d0000b2733fc04c8fd6ddea81c83cc00e",
    },
    {
      title: "Ashique-2",
      image: "https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3",
    },
    {
      title: "Sanam teri ksm",
      image: "https://i.scdn.co/image/ab67616d00001e02113ce0ecfc878bbbe4268916",
    },
    {
      title: "Precious",
      image: "https://i.scdn.co/image/ab67616d00001e0258bade5d6273d970a1e95797",
    },
    {
      title: "I Really Do",
      image: "https://i.scdn.co/image/ab67616d00001e0289e8f71cb6f3b6cc60944858",
    },
  ];

  const button1 = () => {
    setshow(true);
    setshow1(false);
    setshow2(false);
  };

  const button2 = () => {
    setshow1(true);
    setshow(false);
    setshow2(false);
  };

  const button3 = () => {
    setshow2(true);
    setshow(false);
    setshow1(false);
  };

  const chatbox = () => {
    setshow3((prev) => !prev);
    setshowA(true);
  };

  return (
    <>
      <div className="mainheader-new">
        <div className="boxx-1">
          <div className="barrr-1>">
            <div className="brk-1">
              <img
                className="ic-img"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
                alt=""
              />
              <span className="SSp">
                <i class="ri-home-5-fill"></i>
              </span>
            </div>
            <div className="brk-2">
              <i class="ri-search-2-line"></i>
              <form onSubmit={searchsong} className="frst-Frm">
                <input
                  name="search"
                  className="inp-2"
                  type="text"
                  placeholder="What do you want to play?"
                  onChange={(e) => {
                    if (!e.target.value.trim()) {
                      setDsearch([]);
                      setshow8(false);
                    }
                  }}
                />
              </form>
            </div>
            <i class="ri-folders-line"></i>
            <div className="brk-3">
              <button className="f-btn">Explore premium</button>

              <button onClick={Nbtn} className="f-btn2">
                <i class="ri-add-line"></i>Create music
              </button>
              <i onClick={chatbox} class="ri-robot-3-fill"></i>
              <img
                className="p-img"
                src="https://www.svgrepo.com/show/402071/letter-s.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="boxx-2">
          <div className="pbox-1">
            <div className="LLine-1">
              <h2 className="YL">Your Library</h2>
              <span className="AL">
                <i class="ri-add-large-line"></i>
              </span>
            </div>
            <h3 className="Pl3">Playlist</h3>
            <div className="LLine-2">
              <i class="ri-search-line"></i>
              <h4 className="R-4">Recent</h4>
              <i class="ri-play-list-line"></i>
            </div>
            <div className="LLine-3">
              <h3 className="line-3h">Create your first Playlist</h3>
              <h4 className="line-3h4">its easy,we'll help you </h4>
              <button className="line-3b">Create playlist</button>
            </div>
            <div className="LLine-4">
              <ul className="Ul-4">
                <li className="li-4">Services</li>
                <li className="li-4">Cookies</li>
                <li className="li-4">Accebility</li>
              </ul>
            </div>
          </div>
          <div className="pbox-2">
            <div className="barr-1a">
              <button onClick={button1} className="Mbtn">
                All
              </button>
              <button onClick={button2} className="Mbtn">
                Podcast
              </button>
            </div>
            {show && (
              <div className="allMd">
                <div className="row-0">
                  <TopBar />
                </div>
                <div className="row-1">
                  <h2 className="Edt-h">Editor's Pick</h2>
                  <div className="a-1">
                    {mymusic.map((mymusic) => {
                      return (
                        <div
                          className="new-a"
                          onClick={() => {
                            setPmusic(mymusic.music);
                            setPimage(mymusic.image);
                            setPtitle(mymusic.title);
                            setMusicbar(true);
                            setYoutubebar(false);
                          }}
                        >
                          <Album1 img={mymusic.image} tlt={mymusic.title} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="row-2">
                  <h2 className="Edt-h2">Recommended for today</h2>
                  <div className="a-2">
                    {indianSongs1.map((indianSongs1) => {
                      return (
                        <Row2music
                          img={indianSongs1.image}
                          tlt={indianSongs1.title}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {show1 && (
              <div className="allMd">
                <Podcast />
              </div>
            )}
            {show2 && <div className="allMd">podcast</div>}
          </div>
        </div>
        {Musicbar && (
          <div className="box-31">
            <Music1 song={Pmusic} stitle={Ptitle} img={Pimage} />
          </div>
        )}
        {show3 && (
          <div className="chatbox">
            <div className="cbox-1">
              {showA && (
                <div className="cbox-0">
                  <i class="ri-robot-3-line"></i>
                  <h3 className="ai-h3">Hey, welcome to spotify AI</h3>
                </div>
              )}

              {message.map((m, i) => (
                <p
                  key={i}
                  className={m.role === "user" ? "u-reply" : "c-reply"}
                >
                  {m.Content}
                </p>
              ))}
              <div ref={bottomref}></div>
            </div>

            <div className="cbox-2">
              <form onSubmit={chatboxM} className="chatbox-frm">
                <input
                  type="text"
                  name="prompt"
                  placeholder="ask anything"
                  className="ai-inp"
                />
                <button className="cbtn">
                  <i class="ri-send-ins-fill"></i>
                </button>
              </form>
            </div>
          </div>
        )}
        {show8 && (
          <div className="searched song">
            {Dsearch.map((item, index) => {
              return (
                <div
                  key={index}
                  className="srh-sng"
                  onClick={() => {
                    setYoutubesong(item.id.videoId);
                    console.log(setYoutubesong);
                    setMusicbar(false);
                    setYoutubebar(true);
                    setshow8(false);
                  }}
                >
                  <div className="prt-1S">
                    <img
                      className="srch-img"
                      src={item.snippet.thumbnails.medium.url}
                      alt=""
                    />
                  </div>
                  <div className="prt-2S">
                    <h4 className="srch-h4">{item.snippet.title}</h4>
                    <p className="srch-p">{item.snippet.channelTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {Youtubebar && (
          <div className="box-31">
            <iframe
              src={`https://www.youtube.com/embed/${Youtubesong}?autoplay=1`}
              width="100%"
              height="90"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Homebar;

import React from "react";
import { useRef, useState, useEffect } from "react";

function Music1({ song, stitle, img }) {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setvolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const changevolume = () => {
      setvolume(audio.volume);
    };

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };
    audio.addEventListener("volumechange", changevolume);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("volumechange", changevolume);
    };
  }, []);

  useEffect(() => {
    if (song) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [song]);

  return (
    <div className="box-3a">
      <div className="acolm-1">
        {song ? <img className="Ab-img" src={img} alt="" /> : <h5>🎶</h5>}
        {song ? (
          <h2 className="A-h3">{stitle}</h2>
        ) : (
          <h6 className="lh6">No song</h6>
        )}
      </div>
      <div className="msuic-bar">
        <div className="acolm-2">
          <i class="ri-replay-15-fill"></i>
          <i class="ri-skip-back-fill"></i>
          <button className="M-btn" onClick={togglePlay}>
            {isPlaying ? (
              <i class="ri-pause-circle-line"></i>
            ) : (
              <i class="ri-play-circle-fill"></i>
            )}
          </button>
          <i class="ri-skip-forward-fill"></i>
          <i class="ri-forward-15-fill"></i>
        </div>
        <div className="acolm-3">
          <input
            className="L-m"
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
            }}
            style={{
              width: "70%",
              background: `linear-gradient(
      to right,
      #ffffff 0%,
      #ffffff ${(currentTime / duration) * 100}%,
      #3d3d3d ${(currentTime / duration) * 100}%,
      #898989 100%
    )`,
            }}
          />
        </div>
      </div>
      <div className="acolm-4">
        <i class="ri-mic-line"></i>
        <i class="ri-volume-up-fill"></i>
        <input
          className="L-m2"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => {
            audioRef.current.volume = Number(e.target.value);
          }}
          style={{
            width: "30%",
            background: `linear-gradient(
      to right,
      #ffffff 0%,
      #ffffff,
      #ffffff,
      #ffffff 100%
    )`,
          }}
        />

        <audio ref={audioRef} src={song} />
      </div>
    </div>
  );
}

export default Music1;

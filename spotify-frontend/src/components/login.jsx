import React from "react";
import Registerform from "./register";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import image from "../assets/wrong-image.png";
import checkImg from "../assets/green-double-circle-check-mark_78370-1749.avif";
import axios from "axios";

function Login() {
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [name, setname] = useState("");

  const cutone = () => {
    setshow2(false);
  };
  const Navigate = useNavigate();
  const submithandler1 = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const data = {
      email: formdata.get("email"),
      password: formdata.get("password"),
    };

    axios
      .post("https://spotify-clone-1j8u.onrender.com/api/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setname(res.data.username);

        setshow3(true);

        setTimeout(() => {
          Navigate("/h");
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        setshow2(true);
      });
  };
  return (
    <>
      <div className="main-header">
        <div className="logindiv">
          <div className="log-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPN9iRabYlPADljooW5j4UtXw9u2l6qIOdaA&s"
              alt=""
            />
            <h2>Spotify</h2>
          </div>
          <h3>Welcome Back</h3>
          <p>Login to continue your music journey</p>
          <form onSubmit={submithandler1}>
            <label htmlFor="">EMAIL OR USERNAME</label>
            <input type="text" name="email" />
            <br />
            <label htmlFor="">PASSWORD</label>
            <input type="Password" name="password" />
            <br />
            <div className="centerbar">
              <div className="remp-1">
                <input className="chk-input" type="checkbox" />
                <h3 className="remh2">Remeber me</h3>
              </div>
              <div className="remp-2">
                <h3 className="remh3">forgotten password?</h3>
              </div>
            </div>
            <button type="submit">Login</button>
          </form>

          <h4 className="de">or continue with</h4>

          <button className="btn-2">
            <i class="ri-google-fill"></i>Continue with Google
          </button>
          <div className="lastbar">
            <h4 className="demo">New to spotify?</h4>
            <Link className="lk" to="/R">
              register?
            </Link>
          </div>
        </div>
      </div>
      {show && (
        <div className="lgn-popup">
          <div className="popuop">
            <img className="lgnimg" src={checkImg} alt="" />
            <h2 className="lgnh2">Login sucessfully</h2>
            <h2 className="lgnh2">{name}👋</h2>
            <h2 className="lgnh3">ENJOY YOUR MUSIC🎶</h2>
          </div>
        </div>
      )}
      {show2 && (
        <div className="lgn-popup">
          <div className="popuop">
            <img className="lgnimg" src={image} alt="" />
            <h2 className="lgnh2">
              Login failed
              <span onClick={cutone}>
                <i class="ri-close-line"></i>
              </span>
            </h2>
            <h2 className="r-first">Register first and enjoy the music</h2>
          </div>
        </div>
      )}
      {show3 && (
        <div className="Load-img">
          <img
            className="img-load"
            src="https://miro.medium.com/1*J28nPRH4udvAqcVbs46oxg.gif"
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default Login;

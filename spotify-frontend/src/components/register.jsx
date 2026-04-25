import React from "react";
import hero from "../assets/spotify_hero_left.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checkImg from "../assets/green-double-circle-check-mark_78370-1749.avif";
import axios from "axios";

function Registerform() {
  const [show, setshow] = useState(false);
  const [show3, setshow3] = useState(false);
  const navigate = useNavigate();
  const submithandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);

    const data = {
      username: formdata.get("username"),
      email: formdata.get("email"),
      password: formdata.get("password"),
      role: formdata.get("role"),
    };

    axios
      .post("https://spotify-clone-1j8u.onrender.com", data)
      .then((res) => {
        setshow(true);
        localStorage.setItem("token", res.data.token);
        setshow3(true);
        setTimeout(() => {
          navigate("/h");
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="main-R">
        <div className="Rbox-1">
          <img className="R-img" src={hero} alt="" />
        </div>
        <div className="Rbox-2">
          <h2 className="lblh-2">Get started</h2>
          <h3>Create your account</h3>
          <p className="p-0">Its free and take only few minute</p>
          <form onSubmit={submithandler} className="register-form">
            <label className="r-lb">Username</label>
            <input type="text" name="username" />
            <label className="r-lb">Email</label>
            <input type="text" name="email" />
            <label className="r-lb">Role</label>
            <select className="myselect" name="role">
              <option value="user">user</option>
              <option value="artist">Artist</option>
            </select>
            <br />
            <label className="r-lb">Password</label>
            <input type="password" name="password" />
            <button type="submit" className="lbl-btn ">
              Register
            </button>
          </form>
          <h4 className="den">or register with</h4>
          <button className="lbtn-2">
            <i class="ri-google-fill"></i>Continue with google
          </button>
          <br />
          <Link className="lkn" to="/">
            Already have an account
          </Link>
        </div>
      </div>
      {show && (
        <div className="lgn-popup">
          <div className="popuop">
            <img className="lgnimg" src={checkImg} alt="" />
            <h2 className="lgnh2">Register sucessfully</h2>
          </div>
        </div>
      )}
      {show3 && (
        <div className="Load-img2">
          <img
            className="img-load2"
            src="https://miro.medium.com/1*J28nPRH4udvAqcVbs46oxg.gif"
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default Registerform;

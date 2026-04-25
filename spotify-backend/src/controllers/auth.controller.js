const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

async function register(req, res) {
  const { username, email, password, role } = req.body;
  const isuserexist = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isuserexist) {
    return res.status(401).json({
      message: "the user already exist",
      username,
      email,
      role,
    });
  }

  const hashpasword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    role,
    password: hashpasword,
  });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "d5a9211ed33372d2e969ec377e6d1905",
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "the data added sucessfully",
    username,
    email,
    role,
    token,
  });
}

async function login(req, res) {
  console.log("MUSIC API HIT");
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(401).json({
      message: "user is not found",
    });
  }

  const verifypassword = await bcrypt.compare(password, user.password);

  if (!verifypassword) {
    return res.status(401).json({
      message: "invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
      username: user.username,
    },
    "d5a9211ed33372d2e969ec377e6d1905",
  );
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
  });

  res.status(201).json({
    message: "login sucessfully",
    role: user.role,
    token: token,
    username: user.username,
  });
}

module.exports = { register, login };

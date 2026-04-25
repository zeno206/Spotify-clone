const Jwt = require("jsonwebtoken");
const { uploadFile } = require("../service/storage.service");
const musicModel = require("../models/music.model");
const express = require("express");

async function Createmusic(req, res) {
  console.log("music api hit");

  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.status(401).json({
      message: "we cannot get the token",
    });
  }

  try {
    const decoded = Jwt.verify(token, "d5a9211ed33372d2e969ec377e6d1905");

    if (decoded.role !== "artist") {
      return res.status(401).json({
        message: "only artist can create the music",
      });
    }

    const { title } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "music file is required",
      });
    }

    console.log("uploading file...");

    const result = await uploadFile(file.buffer.toString("base64"));

    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: decoded.id,
    });

    return res.status(201).json({
      message: "music created successfully",
      music,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "unauthorized",
    });
  }
}

async function addMusic(req, res) {
  console.log("GET MUSIC API HIT");
  const music = await musicModel.find();

  res.status(200).json({
    message: "here is the music",
    music: music,
  });
}
module.exports = { Createmusic, addMusic };

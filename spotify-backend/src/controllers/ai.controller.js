const express = require("express");
const axios = require("axios");

async function Aisearch(req, res) {
  const { search } = req.body;
  try {
    const smarts = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: search,
          key: "AIzaSyCYN4LsS3fv6EBeVer_VIDS55mDvwHgaUU",
          type: "video",
          maxResults: 5,
          videoEmbeddable: true,
        },
      },
    );

    res.json(smarts.data.items);
  } catch (error) {
    console.log(error.response?.data);
    res.json(error);
  }
}
let cachebar1 = null;
async function Aipodcast(req, res) {
  if (cachebar1) {
    return res.json(cachebar1);
  }
  try {
    const Podcast = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: "podcast",
          key: "AIzaSyCYN4LsS3fv6EBeVer_VIDS55mDvwHgaUU",
          type: "video",
          maxResults: 5,
          videoEmbeddable: true,
        },
      },
    );
    cachebar1 = Podcast.data.items;
    res.json(Podcast.data.items);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}
let cachebar = null;
async function topbar(req, res) {
  if (cachebar) {
    return res.json(cachebar);
  }
  try {
    const Topbarmusic = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: "playlist",
          key: "AIzaSyCYN4LsS3fv6EBeVer_VIDS55mDvwHgaUU",
          type: "video",
          maxResults: 5,
          videoEmbeddable: true,
        },
      },
    );
    cachebar = Topbarmusic.data.items;
    res.json(Topbarmusic.data.items);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

module.exports = { Aisearch, Aipodcast, topbar };

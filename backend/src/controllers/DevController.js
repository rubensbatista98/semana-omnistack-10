const axios = require("axios");

const Dev = require("../models/Dev");
const parseArrayAsString = require("../utils/parseStringAsArray");

async function index(req, res) {
  const devs = await Dev.find();

  return res.json(devs);
}

async function store(req, res) {
  const { github_username, techs, latitude, longitude } = req.body;

  let dev = await Dev.findOne({ github_username });

  if (!dev) {
    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, avatar_url, bio } = response.data;

    const techsArray = parseArrayAsString(techs);

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    dev = await Dev.create({
      name,
      github_username,
      bio,
      avatar_url,
      techs: techsArray,
      location
    });
  }

  return res.json(dev);
}

module.exports = { index, store };

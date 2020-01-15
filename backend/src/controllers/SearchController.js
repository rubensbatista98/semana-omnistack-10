const Dev = require("../models/Dev");

const parseArrayAsString = require("../utils/parseStringAsArray");

async function index(req, res) {
  const { latitude, longitude, techs } = req.query;

  const KILOMETERS_DISTANCE = 10000;

  const techsArray = parseArrayAsString(techs);

  const devs = await Dev.find({
    techs: {
      $in: techsArray
    },
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
          $maxDistance: KILOMETERS_DISTANCE
        }
      }
    }
  });

  return res.json({ devs });
}

module.exports = { index };

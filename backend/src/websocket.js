const socketio = require("socket.io");

const parseStringAsArray = require("./utils/parseStringAsArray");
const calculateDistance = require("./utils/calculateDistance");

let io = null;
const connections = [];

function setupWebSocket(server) {
  io = socketio(server);

  io.on("connection", socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
        techs: parseStringAsArray(techs)
      }
    });
  });
}

function findConnections(coordinates, techs) {
  return connections.filter(connection => {
    return (
      calculateDistance(coordinates, connection.coordinates) < 10 &&
      connections.techs.some(item => techs.includes(item))
    );
  });
}

function sendMessage(to, message, data) {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
}

module.exports = { setupWebSocket, findConnections, sendMessage };

module.exports = function(arrayAsString) {
  return arrayAsString.split(",").map(string => string.trim());
};

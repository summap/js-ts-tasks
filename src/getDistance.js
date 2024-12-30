/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  let dx = secondPoint.X - firstPoint.X;
  let dy = secondPoint.Y - firstPoint.Y;
  let result = Math.sqrt(dx ** 2 + dy ** 2);
  return parseFloat(result.toFixed(2));
};

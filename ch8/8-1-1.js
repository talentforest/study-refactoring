export function trackSummary(points) {
  const time = 10000;
  const distance = calculateDistance(points);
  const pace = time / 60 / distance;
  return { time, distance, pace };
}

function calculateDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

function distance(place1, place2) {
  // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
  const EARTH_RADIUS = 3959; // in miles
  const dLat = radians(place2.lat) - radians(place1.lat);
  const dLon = radians(place2.lon) - radians(place1.lon);

  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(place2.lat)) *
      Math.cos(radians(place1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

const newYork = {
  lat: 40.73061,
  lon: -73.935242,
};

const tokyo = {
  lat: 35.652832,
  lon: 139.839478,
};

const summary = trackSummary([newYork, tokyo]);
console.log(summary);

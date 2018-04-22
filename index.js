// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  return Math.abs(42 - destination);
}

function distanceFromHqInFeet(destination) {
  return (distanceFromHqInBlocks(destination) * 264);
}

function distanceTravelledinFeet(origin, destination) {
  const distance = Math.abs(destination-origin);
  return (distance *264);
}

function calculatesFarePrice(start, destination) {
  
}
